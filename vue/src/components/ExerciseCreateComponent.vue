<template>
  <div>
    <div>Create Exercises in...</div>
    <h1 class="title">{{workout.workout}}</h1>
    <form>
      <input
        type="text"
        name="exercise"
        class='input'
        autocomplete="off"
        placeholder="Exercise name"
        v-model="exercise.name">

      <input
        type="number"
        name="weightGoal"
        class='input'
        autocomplete="off"
        placeholder="Weight Goal (kg)"
        v-model="exercise.weightGoal">

      <input
        type="number"
        name="repsGoal"
        class='input'
        autocomplete="off"
        placeholder="Reps Goal"
        v-model="exercise.repsGoal">

      <input
        type="number"
        name="timeGoal"
        class='input'
        autocomplete="off"
        placeholder="Time Goal, e.g 60s"
        v-model="exercise.timeGoal">

      <input
        type="number"
        name="repTime"
        class='input'
        autocomplete="off"
        placeholder="Rep Time (e.g 5sec for each rep)"
        v-model="exercise.repTime">

      <input
        type="number"
        name="numberOfSets"
        class='input'
        autocomplete="off"
        placeholder="Number of Sets (e.g 3 sets)"
        v-model="exercise.numberOfSets">

      <input
        type="text"
        name="comment"
        class='input'
        autocomplete="off"
        placeholder="comment"
        v-model="exercise.comment">

      <input
        type="text"
        name="image"
        class='input'
        autocomplete="off"
        placeholder="image"
        v-model="exercise.image">
      <br>
      <br>
      <button
        type="button"
        @click="create">
          Create exercise
      </button>
    </form>
    <br>
    <div v-if="lastAddedExercise.name" style="background: rgba(255, 255, 255, .1); padding: 12px; border: 1px solid #f3e8c6;">
      <h2 class="h2">Added</h2>
      <ul class="list">
        <li class="list__item exercise">
          <div class="h2 exercise__title">
            <h2 >{{lastAddedExercise.numberOfSets}}x {{lastAddedExercise.name}}</h2>
          </div>
          <div class="exercise__ex-rep-time">
             <span>rep interval:</span>
             <strong>{{lastAddedExercise.repTime}}</strong>
           </div>
          <div class="exercise__ex-time-goal">
             <span>Aim for:</span>
             <strong>{{lastAddedExercise.timeGoal}}s</strong>
           </div>
          <div class="exercise__ex-weight-goal">
             <span>Aim for:</span>
             <strong>{{lastAddedExercise.weightGoal}}kg</strong>
           </div>
          <div class="exercise__ex-comment">
              <span class="icon-comment"></span>
              {{lastAddedExercise.comment}}
          </div>
        </li>
      </ul>
    </div>

    <ul class="list" v-if="workout.exercises">
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
  </div>
</template>

<script>

import exerciseService from '@/services/ExerciseService'
import workoutService from '@/services/WorkoutService'

export default {
  name: 'ExercisesCreate',
  props: [

  ],
  data () {
    return {
      workoutId: '',
      workout: {},
      exercise: {
        name: '',
        weightGoal: '',
        repsGoal: '',
        timeGoal: '',
        repTime: '',
        numberOfSets: '',
        comment: '',
        image: '',
      },
      lastAddedExercise: {},
    }
  },
  mounted () {
    this.workoutId = this.$route.params.workoutId
    this.getWorkout()
  },
  methods: {
    async getWorkout () {
      const response = await workoutService.getWorkout(this.workoutId)
      this.workout = response.data
    },
    async create () {
      const response = await exerciseService.createExercises({
        workoutId: this.workoutId,
        exercises: this.exercise,
      })
      this.lastAddedExercise = this.exercise
      this.exercise = {}
      let sortedExercises = response.data.value.exercises.sort(function(a, b) { return a.name > b.name })
      this.workout.exercises = sortedExercises;
    }
  }
}
</script>

<style scoped>

  .input{
    width: 48%;
  }

</style>
