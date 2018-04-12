<template>
  <div>

    <h1>Workout : {{ workout.workout }} </h1>

    <div v-for="exercises in workout.exercises">
      <h2>{{exercises.name}}</h2>
      <span>number of exercises:</span> <strong>{{exercises.numberOfSets}}</strong> <br>
      <span>repTime:</span> <strong>{{exercises.repTime}}</strong> <br>
      <span>timeGoal:</span> <strong>{{exercises.timeGoal}}</strong> <br>
      <span>weightGoal:</span> <strong>{{exercises.weightGoal}}</strong> <br>
      <span>comment:</span> <strong>{{exercises.comment}}</strong> <br>
      <span>image:</span> <strong>{{exercises.image}}</strong> <br>
      <br>
      <hr>
      <br>
    </div>

    <a :href="createExercisesUrl()">Add Exercises</a>
    <br>
    <br>
    <a :href="sessionUrl()">Start workout</a>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'Workout',
  props: [

  ],
  data () {
    return {
      workoutId: '',
      workout: {}
    }
  },
  mounted () {
    this.workoutId = this.$route.params.workoutId
    this.getWorkout()
  },
  methods: {
    async getWorkout () {
      const response = await WorkoutService.getWorkout(this.workoutId)
      this.workout = response.data
    },
    createExercisesUrl () {
      return `/workout/${this.workoutId}/exercises/create/`
    },
    sessionUrl () {
      return `/workout/${this.workoutId}/session/`
    }
  }

}
</script>

<style scoped>

</style>
