<template>
  <div>
    <h1>ExercisesCreate</h1>
    <form>
      <input
        type="text"
        name="exercises"
        autocomplete="off"
        placeholder="Exercises name"
        v-model="exercises.name">
      <br>
      <input
        type="number"
        name="weightGoal"
        autocomplete="off"
        placeholder="Weight Goal (kg)"
        v-model="exercises.weightGoal">
      <br>
      <input
        type="number"
        name="repsGoal"
        autocomplete="off"
        placeholder="Reps Goal"
        v-model="exercises.repsGoal">
      <br>
      <input
        type="number"
        name="timeGoal"
        autocomplete="off"
        placeholder="Time Goal, e.g 60s"
        v-model="exercises.timeGoal">
      <br>
      <input
        type="number"
        name="repTime"
        autocomplete="off"
        placeholder="Rep Time (e.g 5sec for each rep)"
        v-model="exercises.repTime">
      <br>
      <input
        type="number"
        name="numberOfSets"
        autocomplete="off"
        placeholder="Number of Sets (e.g 3 sets)"
        v-model="exercises.numberOfSets">
      <br>
      <input
        type="text"
        name="comment"
        autocomplete="off"
        placeholder="comment"
        v-model="exercises.comment">
      <br>
      <input
        type="text"
        name="image"
        autocomplete="off"
        placeholder="image"
        v-model="exercises.image">
      <br>
      <button
        type="button"
        @click="create">
          Create exercises
      </button>
    </form>

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

  </div>
</template>

<script>

import exerciseService from '@/services/ExerciseService'

export default {
  name: 'ExercisesCreate',
  props: [

  ],
  data () {
    return {
      workoutId: '',
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
  },
  methods: {
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

</style>
