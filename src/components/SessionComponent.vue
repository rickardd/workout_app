<template>
  <div>

    <h1>Session</h1>

    Elapse {{breakElapseTime}}
    

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
        :set="NextSet" 
        :workoutId="workout._id" />
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
      workout: {},
      currentSet: {},
      setCounter: 0,
      currentView: 'sessionAction',
      breakElapseTime: -1,
    }
  },
  beforeMount () {
    this.getWorkout("5ac89b9b0db62d3a5c0a9802")
  },
  methods: {
    async getWorkout ( id ) {
      const response = await WorkoutService.getWorkout( id )
      this.workout = response.data
      this.updateSets()
    },
    updateSets(){
      this.currentSet = this.workout.sets[ this.setCounter ]
      this.NextSet = this.workout.sets[ this.setCounter + 1 ]
      this.setCounter += 1
    },
    onActionCompleted( e ){
      const sets = this.workout.sets;
      const lastSet = sets[sets.length -1]
      if( this.currentSet.name === lastSet.name){
        this.currentView = 'sessionCompleted'  
        return  
      }
      this.updateSets()
      this.currentView = 'sessionBreak'
      this.restartBreakElapseTime()
        .then( () => {
          this.currentView = 'sessionAction'    
        });
    },
    onBreakCompleted( e ){
      this.currentView = 'sessionAction'
    },
    restartBreakElapseTime(){
      this.breakElapseTime = 3
      return new Promise( (resolve, reject) => {
        let t = setInterval( () => {
          this.breakElapseTime -= 1;
          if(this.breakElapseTime <= 0) {
            clearInterval(t)
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
