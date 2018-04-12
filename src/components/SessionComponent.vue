<template>
  <div>

    <h1>Session</h1>

    <div v-if="!workout">
      Loading...
    </div>

    <div v-if="currentView == 'sessionCompleted'">
      SESSION COMPLETED
    </div>

    <div v-if="workout">
      <SessionActionComponent
        v-if="currentView == 'sessionAction'"
        :exercises="currentExercises"
        :workoutId="workout._id"
        @actionCompleted="onActionCompleted" />
      <SessionBreakComponent
        v-if="currentView == 'sessionBreak'"
        :exercises="currentExercises"
        @breakCompleted="onBreakCompleted" />
    </div>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
import SessionActionComponent from './SessionActionComponent'
import SessionBreakComponent from './SessionBreakComponent'

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
      currentExercises: {},
      exercisesCounter: 0,
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
      this.currentExercises = this.workout.exercises[ this.exercisesCounter ]
      this.exercisesCounter += 1
    },
    onActionCompleted ( e ) {
      const exercises = this.workout.exercises;
      const lastExercises = exercises[exercises.length -1]
      if( this.currentExercises.name === lastExercises.name){
        this.currentView = 'sessionCompleted'
        return
      }
      this.updateExercises()
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
