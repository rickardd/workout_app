<template>
  <div id="app">

    <ul>
      <li>
        <router-link to="/">
          /home
        </router-link>
      </li>
      <li>
        <router-link to="/workouts">
          /workout : List all workouts
        </router-link>
      </li>
      <li>
        <router-link to="/workout/create">
          /workout/create
        </router-link>
      </li>
      <li>
        <router-link to="/set/create">
          /set/create
        </router-link>
      </li>
      <li>
        <router-link to="/action">
          /action
        </router-link>
      </li>
      <li>
        <router-link to="/action/break/2342343">
          /action/break/2342343
        </router-link>
      </li>
    </ul>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
