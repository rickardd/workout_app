<template>
  <div>
    <form>
      <input
        type="text"
        name="workout"
        autocomplete="off"
        placeholder="Workout name"
        v-model="workout.name">
      <br>
      <button
        type="button"
        @click="create">
          Create workout
      </button>
    </form>

    <div v-if="workout">
      <hr>
      <h1>{{workout.workout}} created</h1>
      {{workout._id}}
    </div>

    <br>

    <a href="/users">Back to users</a>
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
      workout: {
        name: ''
      }
    }
  },
  methods: {
    async create () {
      const response = await WorkoutService.createWorkout({
        workout: this.workout.name
      })
      const workout = await WorkoutService.getWorkout(response.data.ops[0]._id)
      this.workout = workout.data
    }
  }

}
</script>

<style scoped>

</style>
