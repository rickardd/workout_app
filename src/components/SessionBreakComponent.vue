<template>
  <div>

    <h1>Session break</h1>

    <span>Time left: </span> <span>{{timeLeft}} sec</span>

    <br>
    <br>

    <h2>Next excercise : <span>30 Sec</span></h2>

    <h3>benchpress</h3>
    <span>Weight: </span> <span>x</span><br>
    <span>Rep Time: </span> <span>x</span><br>
    <span>repQuantity: </span> <span>x</span><br>
    <span>repTime: </span> <span>x</span><br>
    <span>timeGoal: </span> <span>x</span><br>
    <span>repGoal: </span> <span>x</span><br>
    <span>image: </span> <span>x</span><br>

    <div>Average</div>
    <span>Average weight: </span> <span>x</span><br>
    <span>Average reps: </span> <span>x</span><br>

    <div>Personal best</div>
    <span>PB weight: </span> <span>x</span><br>
    <span>PB reps: </span> <span>x</span><br>

    <button type="button">Lock</button>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'Workout',
  props: [
    "timeLeft"
  ],
  data () {
    return {
      workout: {}
    }
  },
  // beforeMount () {
  //   this.getWorkout("5ac89b9b0db62d3a5c0a9802")
  // },
  methods: {
    // async getWorkout ( id ) {
    //   const response = await WorkoutService.getWorkout( id )
    //   this.workout = response.data
    // }
  }

}
</script>

<style scoped>

</style>
