<template>
  <div id="app">
    <main class="grid">
      <div class="grid__item grid__item--main">
        <span class="icon-left-open"></span>
        <span class="icon-wrench"></span>
        <span class="icon-spin2"></span>
        <span class="icon-plus-circled"></span>
        <span class="icon-cog"></span>
        <span class="icon-gauge"></span>
        <span class="icon-right-open"></span>
        <br>
        <br>

        <router-view/>
      </div>
      <div class="grid__item grid__item--menu">
        <ul class="main-nav">
          <li class="main-nav__item">
            <router-link to="/" class="default-link">
              <span class="main-nav__icon icon-home"></span>
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/workouts" class="default-link">
              <span class="main-nav__icon icon-align-justify"></span>
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/workout/create" class="default-link">
              CrW
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/exercises/create" class="default-link">
              CrE
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/user/12345" class="default-link">
              <span class="main-nav__icon icon-torso"></span>
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/users" class="default-link">
              <span class="main-nav__icon icon-group"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </main>
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
