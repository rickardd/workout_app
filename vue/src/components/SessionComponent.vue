<template>
  <div>

    <div v-if="!!sessionId">
      <span v-if="currentExercise.numberOfSets">
        Set {{setCounter}}/{{currentExercise.numberOfSets}}
      </span>

      <div v-if="!workout">
        <div class="icon-spin2"></div>
        Loading...
      </div>

      <div v-if="currentView == 'sessionCompleted'">
        SESSION COMPLETED
      </div>

      <div v-if="workout">
        <SessionActionComponent
          v-if="currentView == 'sessionAction' && !!Object.keys( currentExercise ).length "
          :exercise="currentExercise"
          :workoutId="workout._id"
          :sessionId="sessionId"
          :exerciseId="currentExercise._exerciseId"
          @actionCompleted="onActionCompleted" />
        <SessionBreakComponent
          v-if="currentView == 'sessionBreak' && !!Object.keys( currentExercise ).length"
          :exercise="currentExercise"
          :isLastSetInExercise="isLastSetInExercise()"
          :isFirstSetInExercise="isFirstSetInExercise()"
          @breakCompleted="onBreakCompleted" />
      </div>
    </div>
    <div v-else >
      Waiting for session to be created...
    </div>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
import ExerciseService from '@/services/ExerciseService'
import SessionActionComponent from './SessionActionComponent'
import SessionBreakComponent from './SessionBreakComponent'
import eventBus from '../helpers/EventBus'
import SETTINGS from '../settings/settings.js'

export default {
  name: 'Session',
  components: {
    SessionActionComponent,
    SessionBreakComponent,
  },
  props: [

  ],
  data () {
    return {
      workoutId: '',
      workout: {},
      currentExercise: {},
      exercisesCounter: 0,
      setCounter: 1,
      currentView: 'sessionBreak',
      sessionId: null,
    }
  },
  mounted () {
    this.workoutId = this.$route.params.workoutId
    this.createJournal()
  },
  methods: {
    async getWorkout () {
      const response = await WorkoutService.getWorkout( this.workoutId )
      this.workout = response.data
      this.updateExercises()
    },
    async createJournal(){
      const response = await ExerciseService.createJournal( this.workoutId )
      this.sessionId = response.data.value.journals.slice(-1)[0]._journalId; // getting journal id from the last journal in array
      this.getWorkout()
    },
    async closeSession(){
      const response = await ExerciseService.closeJournal( this.sessionId )
    },
    updateExercises () {
      this.currentExercise = this.workout.exercises[ this.exercisesCounter ]
      this.exercisesCounter += 1
    },
    isLastSetInExercise(){
      return this.setCounter >= this.currentExercise.numberOfSets
    },
    isFirstSetInExercise(){
      return this.setCounter === 1
    },
    isLastExerciseCompleted(){
      const exercises = this.workout.exercises;
      const lastExercises = exercises[exercises.length -1]
      this.currentExercise.name === lastExercises.name && this.setCounter >= this.currentExercise.numberOfSets
      debugger
      return this.currentExercise.name === lastExercises.name && this.setCounter >= parseInt(this.currentExercise.numberOfSets)
    },
    onActionCompleted ( e ) {
      if( this.isLastExerciseCompleted() ){
          if (SETTINGS.playSound ) {
            eventBus.$emit('audio:play', 'lullaby')
          }
          this.currentView = 'sessionCompleted' // move to closeSession() when working.
          this.closeSession()
          return
      }
      else{
        if ( this.isLastSetInExercise() ) {
          this.setCounter = 1
          this.updateExercises()
        }
        else{
          this.setCounter += 1;
        }
        this.currentView = 'sessionBreak'
      }
    },
    onBreakCompleted ( e ) {
      this.currentView = 'sessionAction'
    },
  }
}
</script>

<style scoped>

</style>
