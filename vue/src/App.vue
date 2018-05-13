<template>
  <div id="app">

    <div class="flash-screen" :class="{'flash-screen--in': flashScreen}"></div>
    <main class="grid">
      <div class="grid__item grid__item--top-bar">
        <ul class="top-bar">
          <li class="top-bar__item icon-left-open" @click="onBrowsBack"></li>
          <li :class="{'top-bar__item' : true, 'icon-volume' : playSound, 'icon-volume-off' : !playSound}" @click="onSoundClick"></li>
          <li class="top-bar__item" v-if="user">{{user.name}}</li>
          <li class="top-bar__item icon-cog"></li>
          <li class="top-bar__item icon-right-open" @click="onBrowsForward"></li>
        </ul>
      </div>
      <div class="grid__item grid__item--main">

        <div v-if="$store.state.isLoggedIn">
          <router-view/>
        </div>

        <LoginComponent v-if="!$store.state.isLoggedIn" />

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
import LoginComponent from '@/components/LoginComponent'
import eventBus from './helpers/EventBus'
import UserService from '@/services/UserService'
import router from '@/router'
import store from '@/store/store'
import SETTINGS from '@/settings/settings'

export default {
  name: 'App',
  components: {
    AudioComponent,
    LoginComponent,
  },
  data(){
    return {
      flashScreen: false,
      user: null,
      playSound: SETTINGS.playSound
    }
  },
  mounted(){
    eventBus.$on('screen:flash', this.onScreenFlash )
    // eventBus.$on('localStorage:update:user', user => {
    //   this.user = user
    // })

    eventBus.$on('localStorage:user:updated', user => {
      this.user = user
    })

    const userId =  window.localStorage.userId
    if ( !this.user && !!userId) {
      UserService.getUser( userId ).then( res => this.user = res.data)
    }
  },
  methods:{
    onScreenFlash(){
      this.flashScreen = true;
      let t = setTimeout( () => {
        this.flashScreen = false;
      }, 300)
    },
    onBrowsBack(){
      router.go(-1)
    },
    onBrowsForward(){
      router.go(1)
    },
    onSoundClick(){
      SETTINGS.playSound = !SETTINGS.playSound
      this.playSound = SETTINGS.playSound
    },

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
