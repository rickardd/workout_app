<template>
  <div>
    <h1 class="title">Create Workout</h1>
    <form>
      <input
        type="text"
        class="input"
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
  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
import router from '../router'

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
      const response = await WorkoutService.createWorkout({workout: this.workout.name})
      // response = _id
      router.push({ name: 'Workout', params: { workoutId: response.data }})
    },
    workoutUrl() {
      return `/workout/${this.workout._id}/`
    }
  }

}
</script>

<style scoped>

</style>
