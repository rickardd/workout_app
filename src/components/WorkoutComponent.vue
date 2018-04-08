<template>
  <div>

    <h1>Workout : {{ workout.workout }} </h1>

    <div v-for="set in workout.sets">
      <h2>{{set.name}}</h2>
      <span>number of sets:</span> <strong>{{set.numberOfSets}}</strong> <br>
      <span>repTime:</span> <strong>{{set.repTime}}</strong> <br>
      <span>timeGoal:</span> <strong>{{set.timeGoal}}</strong> <br>
      <span>weightGoal:</span> <strong>{{set.weightGoal}}</strong> <br>
      <span>comment:</span> <strong>{{set.comment}}</strong> <br>
      <span>image:</span> <strong>{{set.image}}</strong> <br>
      <br>
      <hr>
      <br>
    </div>

    <a :href="createSetUrl()">Add Set</a>
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
    createSetUrl () {
      return `/workout/${this.workoutId}/set/create/`
    },
    sessionUrl () {
      return `/workout/${this.workoutId}/session/`
    }
  }

}
</script>

<style scoped>

</style>
