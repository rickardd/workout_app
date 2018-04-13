<template>
  <div>

    <h1>Current Exercises : {{ exercise.name }} </h1>

    <div>ElapsedTime: <strong>{{data.elapsedTime}}</strong></div>

    <span>_id:</span> <strong>{{workoutId}}</strong>

    <span>comment:</span> <strong>{{exercise.comment}}</strong> <br>
    <span>image:</span> <strong>{{exercise.image}}</strong> <br>
    <span>repQuantity:</span> <strong>{{exercise.repQuantity}}</strong> <br>
    <span>repTime:</span> <strong>{{exercise.repTime}}</strong> <br>
    <span>timeGoal:</span> <strong>{{exercise.timeGoal}}</strong> <br>
    <span>weight:</span> <strong>{{exercise.weight}}</strong> <br>
    <span>weightGoal:</span> <strong>{{exercise.weightGoal}}</strong> <br>
    <br>

    <form>
      <input
        type="number"
        name="reps"
        autocomplete="off"
        placeholder="reps"
        min="0"
        v-model.number="data.reps">
      <input
        type="number"
        name="weight"
        autocomplete="off"
        placeholder="weight"
        min="0"
        v-model.number="data.weight">
      <br>

      <button type="button" @click="onCompleted">Done</button>
    </form>

  </div>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'

export default {
  name: 'Workout',
  props: [
    "exercise",
    "workoutId",
  ],
  data () {
    return {
      workout: {},
      data: {
        reps: '',
        weight: '',
        elapsedTime: 0,
      },
    }
  },
  mounted () {
    this.resetElapsedTime()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    async createJournal () {
      this.data.workoutId = this.workoutId
      const response = await ExerciseService.createJournal( this.data )
      this.workout = response.data
    },
    onCompleted () {
      this.$emit('actionCompleted')
      this.createJournal();
    },
    resetElapsedTime () {
      this.elapsedTime = 0
      this.timer = setInterval( () => {
        this.data.elapsedTime += 1;
      }, 1000)

    }
  }
}

</script>

<style scoped>

</style>
