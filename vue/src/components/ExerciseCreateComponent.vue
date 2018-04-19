<template>
  <div>
    <div>Create Exercises in...</div>
    <h1 class="title">{{workout.workout}}</h1>
    <form>
      <input
        type="text"
        name="exercises"
        class='input'
        autocomplete="off"
        placeholder="Exercises name"
        v-model="exercises.name">

      <input
        type="number"
        name="weightGoal"
        class='input'
        autocomplete="off"
        placeholder="Weight Goal (kg)"
        v-model="exercises.weightGoal">

      <input
        type="number"
        name="repsGoal"
        class='input'
        autocomplete="off"
        placeholder="Reps Goal"
        v-model="exercises.repsGoal">

      <input
        type="number"
        name="timeGoal"
        class='input'
        autocomplete="off"
        placeholder="Time Goal, e.g 60s"
        v-model="exercises.timeGoal">

      <input
        type="number"
        name="repTime"
        class='input'
        autocomplete="off"
        placeholder="Rep Time (e.g 5sec for each rep)"
        v-model="exercises.repTime">

      <input
        type="number"
        name="numberOfSets"
        class='input'
        autocomplete="off"
        placeholder="Number of Sets (e.g 3 sets)"
        v-model="exercises.numberOfSets">

      <input
        type="text"
        name="comment"
        class='input'
        autocomplete="off"
        placeholder="comment"
        v-model="exercises.comment">

      <input
        type="text"
        name="image"
        class='input'
        autocomplete="off"
        placeholder="image"
        v-model="exercises.image">

      <button
        type="button"
        @click="create">
          Create exercises
      </button>
    </form>



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

<!--
    <hr>
    <ul>
      <li v-for="exercises in exercises">
        <dl>
          <dt style="display: inline;"><strong>name</strong></dt>
            <dd style="display: inline;">{{exercises.name}}</dd><br>
          <dt style="display: inline;"><strong>weightGoal</strong></dt>
            <dd style="display: inline;">{{exercises.weightGoal}}</dd><br>
          <dt style="display: inline;"><strong>repsGoal</strong></dt>
            <dd style="display: inline;">{{exercises.repsGoal}}</dd><br>
          <dt style="display: inline;"><strong>timeGoal</strong></dt>
            <dd style="display: inline;">{{exercises.timeGoal}}</dd><br>
          <dt style="display: inline;"><strong>repTime</strong></dt>
            <dd style="display: inline;">{{exercises.repTime}}</dd><br>
          <dt style="display: inline;"><strong>numberOfSets</strong></dt>
            <dd style="display: inline;">{{exercises.numberOfSets}}</dd><br>
          <dt style="display: inline;"><strong>comment</strong></dt>
            <dd style="display: inline;">{{exercises.comment}}</dd><br>
          <dt style="display: inline;"><strong>image</strong></dt>
            <dd style="display: inline;">{{exercises.image}}</dd><br>
        </dl>
      </li>
    </ul>
 -->
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
      // exercises: [],
      exercises: {
        name: '',
        weightGoal: '',
        repsGoal: '',
        timeGoal: '',
        repTime: '',
        numberOfSets: '',
        comment: '',
        image: '',
      },
      // exercises: {},
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
      console.log(this.workout)
    },
    async create () {
      this.$route.params.username
      const response = await exerciseService.createExercises({
        workoutId: this.workoutId,
        exercises: this.exercises,
      })
      this.exercises = response.data.value.exercises;
    }
  }
}
</script>

<style scoped>

  .input{
    width: 48%;
  }

</style>
