<template>
  <article>

    <h1 class="title">Workout: {{ workout.workout }} </h1>
    <div v-if="!workout.exercises">
      This workout does not yet have any exercises. Please add on the button below.
    </div>
    <br>

    <router-link :to="createExercisesUrl()" :class="{'w-100 button button--big' : !workout.exercises}">
      Exercise <span class="icon-plus"></span>
    </router-link>

    <div v-if="workout.exercises">
      <router-link :to="sessionUrl()">
        Start Workout <span class="icon-right"></span>
      </router-link>
    </div>

    <div v-if="workout.journals">
      <router-link :to="journalUrl()">
        Journals <span class="icon-right"></span>
      </router-link>
    </div>

    <br>
    <br>

    <ul class="list">
      <li class="list__item exercise" v-for="exercises in workout.exercises">
        <div class="h2 exercise__title">
          <h2 >{{exercises.numberOfSets}}x {{exercises.name}}</h2>
        </div>
        <div class="exercise__ex-rep-time">
           <span>rep interval:</span>
           <strong>{{exercises.repTime}}</strong>
         </div>
        <div class="exercise__ex-time-goal">
           <span>Aim for:</span>
           <strong>{{exercises.timeGoal}}s</strong>
         </div>
        <div class="exercise__ex-weight-goal">
           <span>Aim for:</span>
           <strong>{{exercises.weightGoal}}kg</strong>
         </div>
        <div class="exercise__ex-comment">
            <span class="icon-comment"></span>
            {{exercises.comment}}
        </div>
      </li>
    </ul>

  </article>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'Workout',
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
    createExercisesUrl () {
      return `/workout/${this.workoutId}/exercises/create/`
    },
    sessionUrl () {
      return `/workout/${this.workoutId}/session/`
    },
    journalUrl () {
      return `/workout/${this.workoutId}/journals/`
    }
  }

}
</script>

<style scoped>



</style>
