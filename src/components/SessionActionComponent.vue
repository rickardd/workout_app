<template>
  <div>

    <h1>Current set : {{ set.name }} </h1>

    <div>ElapsedTime: <strong>{{data.elapsedTime}}</strong></div>

    <span>_id:</span> <strong>{{workoutId}}</strong>
  
    <span>comment:</span> <strong>{{set.comment}}</strong> <br>
    <span>image:</span> <strong>{{set.image}}</strong> <br>
    <span>repQuantity:</span> <strong>{{set.repQuantity}}</strong> <br>
    <span>repTime:</span> <strong>{{set.repTime}}</strong> <br>
    <span>timeGoal:</span> <strong>{{set.timeGoal}}</strong> <br>
    <span>weight:</span> <strong>{{set.weight}}</strong> <br>
    <span>weightGoal:</span> <strong>{{set.weightGoal}}</strong> <br>
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
import SetService from '@/services/SetService'

export default {
  name: 'Workout',
  props: [
    "set",
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
  mounted(){
    this.resetElapsedTime()
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  methods: {
    async createJournal () {
      this.data.workoutId = this.workoutId
      console.log('DATA', this.data);
      const response = await SetService.createJournal( this.data )
      this.workout = response.data
    },
    onCompleted(){
      this.$emit('actionCompleted')
      this.createJournal();      
    },
    resetElapsedTime(){
      this.elapsedTime = 0

      console.log('START TIMER');
      
      this.timer = setInterval( () => {
        this.data.elapsedTime += 1;
        console.log(this.elapsedTime);
      }, 1000)
    
    }
  }
}

</script>

<style scoped>

</style>
