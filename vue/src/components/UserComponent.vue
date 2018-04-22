<template>
  <div>

    <h1 class="title">User: {{user.name}} {{user.surname}}</h1>


    <h2 class="h2 mb-12">Workouts</h2>
    <ul class="mb-24">
      <li>
        workout 1
      </li>
      <li>
        workout 2
      </li>
    </ul>

    <router-link to="/users">Back to users</router-link>

  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'Users',
  props: [
    'id'
  ],
  data () {
    return {
      user: {}
    }
  },
  methods: {

  },
  async beforeMount () {
    const response = await UserService.getUser(this.id)
    this.user = response.data
  }
}

</script>

<style scoped>

</style>
