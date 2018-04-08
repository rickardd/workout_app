<template>
  <div>

    <h1>Workout : {{ workout.workout }} </h1>

    <span>_id:</span> <strong>{{workout._id}}</strong>

    <div v-for="set in workout.sets">
      <h2>name:</h2> <strong>{{set.name}}</strong> <br>
      <span>comment:</span> <strong>{{set.comment}}</strong> <br>
      <span>image:</span> <strong>{{set.image}}</strong> <br>
      <span>repQuantity:</span> <strong>{{set.repQuantity}}</strong> <br>
      <span>repTime:</span> <strong>{{set.repTime}}</strong> <br>
      <span>timeGoal:</span> <strong>{{set.timeGoal}}</strong> <br>
      <span>weight:</span> <strong>{{set.weight}}</strong> <br>
      <span>weightGoal:</span> <strong>{{set.weightGoal}}</strong> <br>
      <br>
      <hr>
      <br>
    </div>

    <button type="button">Start workout</button>



  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'Workout',
  props: [

  ],
  data () {
    return {
      workout: {}
    }
  },
  beforeMount () {
    this.getWorkout("5ac89b9b0db62d3a5c0a9802")
  },
  methods: {
    async getWorkout ( id ) {
      const response = await WorkoutService.getWorkout( id )
      this.workout = response.data
    }
  }

}
</script>

<style scoped>

</style>
