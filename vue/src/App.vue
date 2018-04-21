<template>
  <div id="app">

    <div class="flash-screen" :class="{'flash-screen--in': flashScreen}"></div>
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
import eventBus from './helpers/EventBus'

export default {
  name: 'App',
  components: {
    AudioComponent
  },
  data(){
    return {
      flashScreen: false,
    }
  },
  mounted(){
    eventBus.$on('screen:flash', this.onScreenFlash )
  },
  methods:{
    onScreenFlash(){
      console.log('screen flash')
      this.flashScreen = true;
      let t = setTimeout( () => {
        this.flashScreen = false;
      }, 300)
    }
  }
}
</script>

<style>

  @keyframes flash {
      0% {
        z-index: 100;
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        z-index: -1;
      }
  }

  .flash-screen{
    background-color: #ffbc00;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
  .flash-screen--in{
    opacity: 1;
    animation: flash .3s ease-in;
    animation-fill-mode: forwards;
  }

</style>
