<template>
  <div>

    <h1>Session</h1>

    {{setCounter}} of {{currentExercise.numberOfSets}}

    <div v-if="!workout">
      Loading...
    </div>

    <div v-if="currentView == 'sessionCompleted'">
      SESSION COMPLETED
    </div>

    <div v-if="workout">
      <SessionActionComponent
        v-if="currentView == 'sessionAction'"
        :exercise="currentExercise"
        :workoutId="workout._id"
        @actionCompleted="onActionCompleted" />
      <SessionBreakComponent
        v-if="currentView == 'sessionBreak'"
        :exercise="currentExercise"
        @breakCompleted="onBreakCompleted" />
    </div>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
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
      setCounter: 0,
      currentView: 'sessionBreak',
    }
  },
  mounted () {
    this.workoutId = this.workoutId = this.$route.params.workoutId
    this.getWorkout()
  },
  methods: {
    async getWorkout () {
      const response = await WorkoutService.getWorkout( this.workoutId )
      this.workout = response.data
      this.updateExercises()
    },
    updateExercises () {
      this.currentExercise = this.workout.exercises[ this.exercisesCounter ]
      this.exercisesCounter += 1
    },
    onActionCompleted ( e ) {
      const exercises = this.workout.exercises;
      const lastExercises = exercises[exercises.length -1]

      if ( this.setCounter >= this.currentExercise.numberOfSets ) {
        this.setCounter = 0;
        this.updateExercises()
      }
      else{
        this.setCounter += 1;
      }

      if( this.currentExercise.name === lastExercises.name && this.setCounter >= this.currentExercise.numberOfSets){
          this.currentView = 'sessionCompleted'
          if (SETTINGS.playSound ) {
            eventBus.$emit('audio:play', 'lullaby')
          }
          return
      }

      this.currentView = 'sessionBreak'

    },
    onBreakCompleted ( e ) {
      this.currentView = 'sessionAction'
    },
  }
}
</script>

<style scoped>

</style>
