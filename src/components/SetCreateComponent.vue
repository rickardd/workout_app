<template>
  <div>
    <h1>SetCreate</h1>
    <form>
      <input
        type="text"
        name="set"
        autocomplete="off"
        placeholder="Set name"
        v-model="set.name">
      <br>
      <input
        type="number"
        name="weightGoal"
        autocomplete="off"
        placeholder="Weight Goal (kg)"
        v-model="set.weightGoal">
      <br>
      <input
        type="number"
        name="repsGoal"
        autocomplete="off"
        placeholder="Reps Goal"
        v-model="set.repsGoal">
      <br>
      <input
        type="number"
        name="timeGoal"
        autocomplete="off"
        placeholder="Time Goal, e.g 60s"
        v-model="set.timeGoal">
      <br>
      <input
        type="number"
        name="repTime"
        autocomplete="off"
        placeholder="Rep Time (e.g 5sec for each rep)"
        v-model="set.repTime">
      <br>
      <input
        type="text"
        name="comment"
        autocomplete="off"
        placeholder="comment"
        v-model="set.comment">
      <br>
      <input
        type="text"
        name="image"
        autocomplete="off"
        placeholder="image"
        v-model="set.image">
      <br>
      <button
        type="button"
        @click="create">
          Create set
      </button>
    </form>
    
    <hr>
    <ul>
      <li v-for="set in sets">
        <dl>
          <dt style="display: inline;"><strong>name</strong></dt>
            <dd style="display: inline;">{{set.name}}</dd><br>
          <dt style="display: inline;"><strong>weightGoal</strong></dt>
            <dd style="display: inline;">{{set.weightGoal}}</dd><br>
          <dt style="display: inline;"><strong>repsGoal</strong></dt>
            <dd style="display: inline;">{{set.repsGoal}}</dd><br>
          <dt style="display: inline;"><strong>timeGoal</strong></dt>
            <dd style="display: inline;">{{set.timeGoal}}</dd><br>
          <dt style="display: inline;"><strong>repTime</strong></dt>
            <dd style="display: inline;">{{set.repTime}}</dd><br>
          <dt style="display: inline;"><strong>repQuantity</strong></dt>
            <dd style="display: inline;">{{set.repQuantity}}</dd><br>
          <dt style="display: inline;"><strong>comment</strong></dt>
            <dd style="display: inline;">{{set.comment}}</dd><br>
          <dt style="display: inline;"><strong>image</strong></dt>
            <dd style="display: inline;">{{set.image}}</dd><br>
        </dl>
      </li>
    </ul>
  
  </div>
</template>

<script>

import SetService from '@/services/SetService'

export default {
  name: 'SetCreate',
  props: [

  ],
  data () {
    return {
      workoutId: '',
      set: {
        name: '',
        weightGoal: '',
        repsGoal: '',
        timeGoal: '',
        repTime: '',
        repQuantity: '',
        comment: '',
        image: '',
      },
      sets: {},
    }
  },
  mounted(){
    this.workoutId = this.$route.params.workoutId
  },
  methods: {
    async create () {
      this.$route.params.username
      const response = await SetService.createSet({
        workoutId: this.workoutId,
        set: this.set,
      })
      this.sets = response.data.value.sets;
      // const set = await SetService.getSet(response.data.ops[0]._id)
      // this.set = set.data
    }
  }
}
</script>

<style scoped>

</style>
