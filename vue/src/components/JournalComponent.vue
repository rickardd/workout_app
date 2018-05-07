<template>
  <article>

    <h1 class="title">Journal: {{ workout.workout }} </h1>
    <div v-if="!journal">
      Whoops! You havent done anything yet. Lazy?
    </div>

    <div v-if="!!journal._journalId">

      <h2 class="h2">Duration: {{getSessionDuration()}}</h2>

      <ul class="list" v-if="journal.exercises">
        <li class="list__item exercise" v-for="exercise in journal.exercises">
          <div class="exercise__ex-rep-time">
             <span>Weight: </span>
             <strong>{{ ( exercise.weight != "" && exercise.weight >= 0) ? exercise.weight : '-'}}</strong>
          </div>
          <div class="exercise__ex-rep-time">
             <span>Time Elapse:</span>
             <strong>{{ (exercise.timeElapse >= 0) ? exercise.timeElapse : '-'}}</strong>
          </div>
          <div class="exercise__ex-time-goal">
             <span>Reps:</span>
             <strong>{{exercise.reps}}s</strong>
          </div>


          <ul class="list">
            <li v-for="(value, key) in getExerciseById( exercise._exerciseId )" class="list__item">
                ({{key}} - {{value}})
            </li>
          </ul>

        </li>
      </ul>
    </div>

  </article>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'Journal',
  props: [

  ],
  data () {
    return {
      workoutId: '',
      workout: {},
      journal: {},
    }
  },
  mounted () {
    this.workoutId = this.$route.params.workoutId
    this.journalId = this.$route.params.journalId

    this.getWorkout()
  },
  methods: {
    async getWorkout () {
      const response = await WorkoutService.getWorkout(this.workoutId)
      this.workout = response.data
      console.log(this.workout)
      this.setJournal()
    },
    setJournal(){
      this.journal = _.find(this.workout.journals, {_journalId: this.journalId })
    },
    getExerciseById( exerciseId ){
      return _.find(this.workout.exercises, {_exerciseId: exerciseId })
    },
    getSessionDuration(){
      if ( !this.journal.FinishDateTime || !this.journal.StartDateTime) return '-'

      const end = moment(this.journal.FinishDateTime)
      const start = moment(this.journal.StartDateTime)
      const duration = start.diff(end)
      return moment(duration).format("m[m] s[s]")
    }
  }

}
</script>

<style scoped>



</style>
