<template>
  <div>

    <h1>Session</h1>

    <div v-if="!workout">
      Loading...
    </div>

    <div v-if="currentView == 'sessionCompleted'">
      SESSION COMPLETED
    </div>

    <div v-if="workout">
      <SessionActionComponent 
        v-if="currentView == 'sessionAction'" 
        :set="currentSet" 
        :workoutId="workout._id" 
        @actionCompleted="onActionCompleted" />
      <SessionBreakComponent 
        v-if="currentView == 'sessionBreak'" 
        :set="currentSet"
        @breakCompleted="onBreakCompleted" />
    </div>

  </div>
</template>

<script>
import WorkoutService from '@/services/WorkoutService'
import SessionActionComponent from './SessionActionComponent'
import SessionBreakComponent from './SessionBreakComponent'

export default {
  name: 'Session',
  components: {
    SessionActionComponent,
    SessionBreakComponent,
  },
  props: [

  ],
  data () {
    return {
      workoutId: '',
      workout: {},
      currentSet: {},
      setCounter: 0,
      currentView: 'sessionBreak',
    }
  },
  mounted () {
    this.workoutId = this.workoutId = this.$route.params.workoutId
    this.getWorkout()
  },
  methods: {
    async getWorkout () {
      const response = await WorkoutService.getWorkout( this.workoutId )
      this.workout = response.data
      this.updateSets()
    },
    updateSets () {
      this.currentSet = this.workout.sets[ this.setCounter ]
      this.setCounter += 1
    },
    onActionCompleted ( e ) {
      const sets = this.workout.sets;
      const lastSet = sets[sets.length -1]
      if( this.currentSet.name === lastSet.name){
        this.currentView = 'sessionCompleted'  
        return  
      }
      this.updateSets()
      this.currentView = 'sessionBreak'
    },
    onBreakCompleted ( e ) {
      this.currentView = 'sessionAction'
    },
  }
}
</script>

<style scoped>

</style>
