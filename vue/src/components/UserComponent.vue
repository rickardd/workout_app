<template>
  <div>

    <h1 class="title">User: {{user.name}} {{user.surname}}</h1>


    <h2 class="h2 mb-12">Workouts</h2>

    <div v-if="!workouts.length">
      You dont have any workouts yet.
      <br>
      <br>
      <router-link class="w-100 button button--big" to="/workout/create">Create a workout</router-link>
    </div>

    <div v-if="workouts.length">
      <ul class="mb-24 list">
        <li v-for="workout in workouts" class="list__item">
          <router-link :to="workoutUrl(workout._id)">
            {{workout.workout}}
          </router-link>
          <span v-if="workout.exercises">{{workout.exercises.length}} exercises</span>
        </li>
      </ul>
    </div>

    <br>

    <router-link to="/users">Back to users</router-link>

  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'Users',
  props: [
    'id'
  ],
  data () {
    return {
      user: {},
      workouts: [],
    }
  },
  methods: {

    workoutUrl( id ){
      return `/workout/${id}`
    }

  },
  async beforeMount () {
    localStorage.setItem('userId', this.id);
    const response = await UserService.getUser(this.id)
    this.user = response.data
    const workouts = await UserService.getUserWorkouts(this.id)
    this.workouts = workouts.data
  }
}

</script>

<style scoped>

</style>
