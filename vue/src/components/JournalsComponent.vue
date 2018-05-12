<template>
  <article>

    <h1 class="title">Journal: {{ workout.workout }} </h1>
    <div v-if="!workout.journals">
      Whoops! You havent done anything yet. Lazy?
    </div>

    Total Sets: {{getTotalNumberOfSets()}}
    <br>

    <ul class="list">
      <li class="list__item exercise" v-for="exercise in workout.exercises">
        <div class="h2 exercise__title">
          <h2 >{{exercise.numberOfSets}}x {{exercise.name}}</h2>
        </div>
      </li>
    </ul>

    <ul class="list">
      <li class="list__item " v-for="journal in workout.journals">
        COMPLETED: {{sessionSince( journal.StartDateTime )}}
        <br>
        {{workout.exercises.length}} Exercises
        <br>
        Completed Sets: {{ journal.exercises.length }}
        <br>
        <br>
        <router-link :to="journalUrl(journal._journalId)">
          Journal <span class="icon-right"></span>
        </router-link>
        <br>
        <br>
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
    },
    journalUrl( journalId ) {
      return `/workout/${this.workoutId}/journal/${journalId}`
    },
    sessionSince( date ){
      return moment(date).fromNow();
    },
    getTotalNumberOfSets(){
      let sum = _.sumBy(this.workout.exercises, (exercise) => {
        return parseInt(exercise.numberOfSets, 10)
      })
      return sum
    },
    getJournalById( journalId ){
      return _.find(this.workout.journals, {_journalId: journalId })
    },
  }
}
</script>

<style scoped>



</style>
