<template>
  <div>

    <h1 class="title">Create Workout</h1>
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
    {{workout._id}}
    <div v-if="!!workout._id">
      <hr>
      <h1>{{workout.workout}} created</h1>
      <router-link :href="workoutUrl()">Go to workout</router-link>
    </div>
    <br>

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
    },
    workoutUrl() {
      return `/workout/${this.workout._id}/`
    }
  }

}
</script>

<style scoped>

</style>
