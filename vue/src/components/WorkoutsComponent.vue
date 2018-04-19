<template>
  <div>

    <h1 class="title">Workouts</h1>

    <div v-if="!!workouts.length">
      <ul class="list">
        <li v-for="workout in workouts" class="list__item">
          <router-link :to="workoutUrl(workout._id)">
            {{workout.workout}}
          </router-link>
          <!-- <a :href="workoutUrl(workout._id)">{{workout.workout}}</a> -->
          <span v-if="workout.exercises">{{workout.exercises.length}} exercises</span>
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
      <router-link to="/workout/create">Create my fist workout :)</router-link>

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
    this.getWorkouts()
  },
  methods: {
    async getWorkouts () {
      const response = await WorkoutService.getWorkouts()
      this.workouts = response.data

      console.log(this.workouts);
    },
    workoutUrl( id ){
      return `/workout/${id}`
    }
  },
}
</script>

<style scoped>

</style>
