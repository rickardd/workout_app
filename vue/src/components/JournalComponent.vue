<template>
  <article>

    <h1 class="title">Journal: {{ workout.workout }} </h1>
    <div v-if="!journal">
      Whoops! You havent done anything yet. Lazy?
    </div>

    <div v-if="!!journal._journalId">

      <h2 class="h2">Duration: {{getSessionDuration()}}</h2>

      <div v-if="journal.exercises">
        <div v-for="(exercise, index) in journal.exercises">

          <!-- IF exercise id is not equal to last exercise id... get exercise data. -->
          <div v-if="!((!!journal.exercises[index - 1]) && journal.exercises[index - 1]._exerciseId ===  exercise._exerciseId)">

            <ul class="list journal-exercise">
              <li v-for="(value, key) in getExerciseById( exercise._exerciseId )" class="list__item">
                <div v-if="key === 'name'">
                  <h2 class="h2">{{value}}</h2>
                </div>
                <div v-if="key === 'weightGoal'">
                  <span class="fi flaticon-gym-6"></span>Weight Aim: {{value}}kg
                </div>
                <div v-if="key === 'repsGoal'">
                  <span class="fi flaticon-square"></span>Number of Reps Aim: {{value}}
                </div>
                <div v-if="key === 'repTime'">
                  Rep Time {{value}}
                </div>
                <div v-if="key === 'timeGoal'">
                  <span class="fi flaticon-shapes-3"></span>Time Aim:  {{value}}
                </div>
                <div v-if="key === 'numberOfSets'">
                  Numer of Sets Aim: {{value}}
                </div>
                <div v-if="key === 'comment'">
                  Comment: {{value}}
                </div>
              </li>
            </ul>

          </div>

          <ul class="list">
            <li class="list__item exercise" >
              <div class="exercise__ex-rep-time">
                 <span><span class="fi flaticon-gym-6"></span>Weight: </span>
                 <strong>{{ ( exercise.weight != "" && exercise.weight >= 0) ? exercise.weight : '-'}}kg</strong>
              </div>
              <div class="exercise__ex-rep-time">
                 <span><span class="fi flaticon-square"></span>ET set:</span>
                 <strong>{{ (exercise.timeElapse >= 0) ? exercise.timeElapse : '-'}}s</strong>
              </div>
              <div class="exercise__ex-time-goal">
                 <span><span class="fi flaticon-shapes-3"></span>Reps:</span>
                 <strong>{{exercise.reps}}</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>


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
      const duration = end.diff(start)
      return moment(duration).format("m[m] s[s]")
    }
  }

}
</script>

<style scoped>

.journal-exercise{
  background-color: rgba(255, 255, 255, 0.2);
  padding: 12px;
  margin-top: 24px;
  margin-bottom: 12px;
}
.journal-exercise li{
  border-bottom: 0;
  padding: 4px;
}

.fi::before{
  font-size: 24px;
  vertical-align: baseline;
  margin-right: 10px;
}


</style>
