<template>
  <div>
    <div v-if="errorMessage">
      <p>{{errorMessage}}</p>
    </div>
    <form action="" v-on:submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="Username"
          class="input"
          v-model="username">
        <input
          type="password"
          placeholder="Password"
          class="input"
          v-model="password">

        <input
          class="button buttton--big"
          value="Login"
          type="submit">
    </form>
  </div>
</template>

<script>

import auth from '@/services/AuthService'
import localStorageClass from '@/services/localStorage'
import store from '@/store/store'

export default {
  name: 'Login',
  props: [

  ],
  data () {
    return {
      username: "",
      password: "",
      errorMessage: null,
    }
  },
  methods: {
    onSubmit(){
      auth.login( { username: this.username, password: this.password } ).then( ( res ) => {

        console.log('LOGGED IN AS', res.data )
        // if res has property email the user succesfully logged in
        if ( res.data.hasOwnProperty('token')) {
          // localStorageClass.setUser(res.data)
          this.$store.dispatch('setUser', res.data.user)
          this.$store.dispatch('setToken', res.data.token)
        }
        else{
          this.errorMessage = 'Login failed'
        }

      })
    },
  }

}
</script>
