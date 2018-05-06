<template>
  <div>


    <h1>Journal</h1>
    <!-- <h1 class="title">User: {{user.name}} {{user.surname}}</h1>


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
 -->
  </div>
</template>

<script>

import JournalService from '@/services/JournalService'

export default {
  name: 'Journal',
  props: [

  ],
  data () {
    return {

    }
  },
  methods: {

  },
  async beforeMount () {
    this.workoutId = this.$route.params.workoutId
    const response = await JournalService.getJournal(this.workoutId)
    this.user = response.data

  }
}

</script>

<style scoped>

</style>
