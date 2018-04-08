<template>
  <div>

    <h1>Workouts</h1>

    <div v-if="!!workouts.length">
      <ul>
        <li v-for="workout in workouts">
          <a :href="workoutUrl(workout._id)">{{workout.workout}}</a>
        </li>
      </ul>
    </div>
    <div v-else>
      Ah. You're a first time user.
      <br>
      <br>
      No worrie...
      <br>
      <br>
      <a href="/workout/create">Create my fist workout :)</a>

    </div>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'WorkoutCreate',
  props: [

  ],
  data () {
    return {
      workouts: []
    }
  },
  beforeMount () {
    console.log('beforeMount');
    this.getWorkouts()
  },
  methods: {
    async getWorkouts () {
      const response = await WorkoutService.getWorkouts()
      // const workout = await WorkoutService.getWorkout(response.data.ops[0]._id)
      this.workouts = response.data
    },
    workoutUrl( id ){
      return `/workout/${id}`
    }
  }

}
</script>

<style scoped>

</style>
