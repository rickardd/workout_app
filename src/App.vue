<template>
  <div id="app">
    <main class="grid">
      <div class="grid__item grid__item--top-bar">
        <ul class="top-bar">
          <li class="top-bar__item icon-left-open"></li>
          <li class="top-bar__item icon-volume"></li>
          <li class="top-bar__item icon-cog"></li>
          <li class="top-bar__item icon-right-open"></li>
        </ul>
      </div>
      <div class="grid__item grid__item--main">
        <router-view/>
      </div>
      <div class="grid__item grid__item--menu">
        <ul class="main-nav">
          <li class="main-nav__item">
            <router-link to="/" class="default-link main-nav__icon">
              <span class="icon-home"></span>
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/workouts" class="default-link main-nav__icon">
              <span class="icon-align-justify"></span>
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/user/12345" class="default-link main-nav__icon">
              <span class="icon-torso"></span>
            </router-link>
          </li>
          <li class="main-nav__item">
            <router-link to="/users" class="default-link main-nav__icon">
              <span class="icon-group"></span>
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
