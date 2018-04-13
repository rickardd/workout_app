<template>
  <div id="app">

    <ul class="main-nav">
      <li class="main-nav__item">
        <router-link to="/">
          <span class="main-nav__icon icon-home"></span>
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link to="/workouts">
          <span class="main-nav__icon icon-align-justify"></span>
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link to="/workout/create">
          CrW
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link to="/exercises/create">
          CrE
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link to="/user/12345">
          <span class="main-nav__icon icon-torso"></span>
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link to="/users">
          <span class="main-nav__icon icon-group"></span>
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
