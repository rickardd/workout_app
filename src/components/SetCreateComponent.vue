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
        type="text"
        name="weight"
        autocomplete="off"
        placeholder="Weight"
        v-model="set.weight">
      <br>
      <input
        type="text"
        name="weightGoal"
        autocomplete="off"
        placeholder="Weight Goal"
        v-model="set.weightGoal">
      <br>
      <input
        type="text"
        name="timeGoal"
        autocomplete="off"
        placeholder="Time Goal"
        v-model="set.timeGoal">
      <br>
      <input
        type="text"
        name="repTime"
        autocomplete="off"
        placeholder="Rep Time (e.g 5sec for each rep)"
        v-model="set.repTime">
      <br>
      <input
        type="text"
        name="repQuantity"
        autocomplete="off"
        placeholder="Number of reps for this set"
        v-model="set.repQuantity">
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

    <div v-if="set">
      <hr>
      <h1>{{set.set}} created</h1>
      {{set._id}}
    </div>

    <br>
  
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
      set: {
        name: '',
        weight: '',
        weightGoal: '',
        timeGoal: '',
        repTime: '',
        repQuantity: '',
        comment: '',
        image: '',
      }
    }
  },
  methods: {
    async create () {
      const response = await SetService.createSet({
        workoutId: '5ac89b9b0db62d3a5c0a9802',
        set: this.set,
      })
      const set = await SetService.getSet(response.data.ops[0]._id)
      this.set = set.data
    }
  }
}
</script>

<style scoped>

</style>
