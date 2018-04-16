<template>
  <div>
    <h1 class="h1">Home</h1>

    <router-link to="/workout/create">
      Create a workout
    </router-link>
    <br>
    <br>
    <router-link to="/workouts/">
      See all workouts
    </router-link>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
