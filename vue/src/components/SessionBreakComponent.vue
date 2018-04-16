<template>
  <div>

    <h1 class="h1">Break</h1>

    <div class="timer">{{breakElapseTime}}</div>


    <ul class="list">
      <li class="list__item exercise">
        <div class="h2 exercise__title">
          <h2 >{{exercise.numberOfSets}}x {{exercise.name}}</h2>
        </div>
        <div class="exercise__ex-rep-time">
           <span>rep interval:</span>
           <strong>{{exercise.repTime}}</strong>
         </div>
          <div class="exercise__ex-rep-quantity">
           <span>Aim for:</span>
           <strong>{{exercise.repQuantity}}</strong>
         </div>
        <div class="exercise__ex-time-goal">
           <span>Aim for:</span>
           <strong>{{exercise.timeGoal}}s</strong>
         </div>
        <div class="exercise__ex-weight-goal">
           <span>Aim for:</span>
           <strong>{{exercise.weightGoal}}kg</strong>
         </div>

         <div class="exercise__ex-avg-weight">
           <span>Average weight:</span>
           <strong>- kg</strong>
         </div>
         <div class="exercise__ex-avg-reps">
           <span>Average reps:</span>
           <strong>- reps</strong>
         </div>

         <div class="exercise__ex-pb-weight">
           <span>PB weight:</span>
           <strong>- kg</strong>
         </div>
         <div class="exercise__ex-pb-reps">
           <span>PB reps:</span>
           <strong>- reps</strong>
         </div>

        <div class="exercise__ex-comment">
            <span class="icon-comment"></span>
            {{exercise.comment}}
        </div>
      </li>
    </ul>

    <br>
    <br>

    <button type="button">
      <span class="icon-lock-open"></span>
      Lock
    </button>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'

export default {
  name: 'Workout',
  props: [
    "exercise"
  ],
  data () {
    return {
      workout: {},
      timer: null,
      breakElapseTime: 0,
    }
  },
  mounted () {
    this.restartBreakElapseTime()
      .then( () => {
        this.$emit('breakCompleted')
      })
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    restartBreakElapseTime () {
      this.breakElapseTime = 5
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
