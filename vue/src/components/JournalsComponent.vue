<template>
  <article>

    <h1 class="title">Journal: {{ workout.workout }} </h1>
    <div v-if="!workout.journals">
      Whoops! You havent done anything yet. Lazy?
    </div>

    <br>
    <br>

    <ul class="list">
      <li class="list__item exercise" v-for="journal in workout.journals">
        <div class="exercise__ex-rep-time">
           <span>Weight:</span>
           <strong>{{journal.weight}}</strong>
        </div>
        <div class="exercise__ex-rep-time">
           <span>Time Elapse:</span>
           <strong>{{journal.elapseTime}}</strong>
        </div>
        <div class="exercise__ex-time-goal">
           <span>Reps:</span>
           <strong>{{journal.reps}}s</strong>
        </div>
      </li>
    </ul>

  </article>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'Journal',
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
      console.log(this.workout)
    },
    // createExercisesUrl () {
    //   return `/workout/${this.workoutId}/exercises/create/`
    // },
    // sessionUrl () {
    //   return `/workout/${this.workoutId}/session/`
    // }
  }

}
</script>

<style scoped>



</style>
