<template>
  <div >
    <h1 class="title">Lists all users</h1>

    <router-link to="/user/create">create new user</router-link>

    <ul v-for="user in users" :key="user.id">
      <li>
        {{user.name}} ({{user.surname}})
        <router-link :to="'/user/' + user._id">view</router-link>
        <button @click="onDelete(user._id)">delete</button>
        <a :href="'/user/update/' + user._id">update</a>
      </li>
    </ul>
  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'Users',
  data () {
    return {
      users: []
    }
  },
  methods: {
    async onDelete (id) {
      await UserService.deleteUser(id)
      const newUsersResponse = await UserService.getUsers()
      this.users = newUsersResponse.data
    }
  },
  async beforeCreate () {
    const response = await UserService.getUsers()
    this.users = response.data
  }
}

</script>

<style scoped>

</style>
