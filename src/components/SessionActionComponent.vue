<template>
  <div>

    <h1>Current set : {{ set.name }} </h1>

    <span>_id:</span> <strong>{{workoutId}}</strong>
  
    <span>comment:</span> <strong>{{set.comment}}</strong> <br>
    <span>image:</span> <strong>{{set.image}}</strong> <br>
    <span>repQuantity:</span> <strong>{{set.repQuantity}}</strong> <br>
    <span>repTime:</span> <strong>{{set.repTime}}</strong> <br>
    <span>timeGoal:</span> <strong>{{set.timeGoal}}</strong> <br>
    <span>weight:</span> <strong>{{set.weight}}</strong> <br>
    <span>weightGoal:</span> <strong>{{set.weightGoal}}</strong> <br>
    <br>
    
    <button type="button" @click="onCompleted">Done</button>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'Workout',
  props: [
    "set",
    "workoutId",
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
    onCompleted(){
      // save form data.
      this.$emit('actionCompleted')
    },
    
  }

}
</script>

<style scoped>

</style>
