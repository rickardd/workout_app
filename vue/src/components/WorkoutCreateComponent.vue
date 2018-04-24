<template>
  <div>
    <h1 class="title">Create Workout</h1>
    <form>
      <input
        type="text"
        class="input w-100"
        name="workout"
        autocomplete="off"
        placeholder="Workout name"
        v-model="workout.name">
      <br>
      <button
        type="button"
        class="button button--big w-100"
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
      let currentUserIdTemp = localStorage.getItem('userId'); // logedin user id
      const response = await WorkoutService.createWorkout({workout: this.workout.name, currentUserIdTemp: currentUserIdTemp})
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
