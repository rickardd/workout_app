<template>
  <div>

    <h1>Break</h1>

    <h2>Get Ready For Next Excercise In : <span>{{breakElapseTime}} Sec</span></h2>

    <h3>{{set.name}}</h3>
    <span>Weight: </span> <span>{{set.weightGoal}}</span><br>
    <span>Rep Time: </span> <span>{{set.repsGoal}}</span><br>
    <span>repQuantity: </span> <span>{{set.repQuantity}}</span><br>
    <span>repTime: </span> <span>{{set.repTime}}</span><br>
    <span>timeGoal: </span> <span>{{set.timeGoal}}</span><br>
    <span>repGoal: </span> <span>{{set.repGoal}}</span><br>
    <span>comment: </span> <span>{{set.comment}}</span><br>
    <span>image: </span> <span>{{set.image}}</span><br>

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
    "set"
  ],
  data () {
    return {
      workout: {},
      timer: null,
      breakElapseTime: 0,
    }
  },
  mounted(){
    this.restartBreakElapseTime()
      .then( () => {
        this.$emit('breakCompleted')
      })
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  methods: {
    restartBreakElapseTime(){
      this.breakElapseTime = 4
      return new Promise( (resolve, reject) => {
        this.timer = setInterval( () => {
          this.breakElapseTime -= 1;
          if(this.breakElapseTime <= 0) {
            clearInterval(this.timer)
            resolve()
          }
        }, 1000)
      })
    }
  
  }
}
</script>

<style scoped>

</style>
