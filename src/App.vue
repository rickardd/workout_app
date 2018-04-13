<template>
  <div id="app">


    (<span class="icon-th-large"></span>)

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
        <router-link to="/exercises/create">
          /exercises/create
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

    <AudioComponent/>

  </div>
</template>

<script>

import AudioComponent from '@/components/AudioComponent'

export default {
  name: 'App',
  components: {
    AudioComponent
  },
  mounted(){
    setTimeout( t => {
      this.$emit('audio:play', 'blop' );
      console.log('emit');
    },1000)
  }
}
</script>

<style>

</style>
