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

        FinishDateTime : {{journal.FinishDateTime}}
        <br>
        StartDateTime : {{journal.StartDateTime}}

        <br>

        SINCE: {{sessionSince( journal.StartDateTime )}}

        <ul class="list">
          <li v-for="exercise in journal.exercises" class="list__item exercise">
            <div class="exercise__ex-rep-time">
               <span>Weight:</span>
               <strong>{{exercise.weight}}</strong>
            </div>
            <div class="exercise__ex-rep-time">
               <span>Time Elapse:</span>
               <strong>{{exercise.elapseTime}}</strong>
            </div>
            <div class="exercise__ex-time-goal">
               <span>Reps:</span>
               <strong>{{exercise.reps}}s</strong>
            </div>

            <router-link :to="journalUrl(journal._journalId)">
              GoTo Journal <span class="icon-right"></span>
            </router-link>

          </li>
        </ul>
      </li>
    </ul>

  </article>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
import moment from 'moment'

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
    journalUrl( journalId ) {
      return `/workout/${this.workoutId}/journal/${journalId}`
    },
    sessionSince( date ){
      return moment(date).fromNow();
    }
  }

}
</script>

<style scoped>



</style>
