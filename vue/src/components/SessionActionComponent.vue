<template>
  <div>

    <h1 class="title">Exercises : {{ exercise.name }} </h1>

    <div class="timer">{{data.elapsedTime}}</div>

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
        <div class="exercise__ex-comment">
            <span class="icon-comment"></span>
            {{exercise.comment}}
        </div>
      </li>
    </ul>

    <br>
    <br>

    <form>
      <input
        type="number"
        class='input'
        name="reps"
        autocomplete="off"
        placeholder="reps"
        min="0"
        v-model.number="data.reps">
      <input
        type="number"
        class='input'
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
import eventBus from '../helpers/EventBus'
import SETTINGS from '../settings/settings.js'

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
    if (SETTINGS.playSound ) {
      eventBus.$emit('audio:play', 'beep')
    }
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
        if (this.data.elapsedTime % 5 === 0 && SETTINGS.playSound ) {
          eventBus.$emit('audio:play', 'blop')
        }
      }, 1000)

    }
  }
}

</script>

<style scoped>

</style>
