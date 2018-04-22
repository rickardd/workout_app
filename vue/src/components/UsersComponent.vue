<template>
  <div >
    <h1 class="title">Lists all users</h1>

    <router-link class="mb-24" to="/user/create">create new user</router-link>

    <ul v-for="user in users" :key="user.id">
      <li class="mb-12">
        {{user.name}} {{user.surname}}
        <router-link class="button button--small" :to="'/user/' + user._id">view</router-link>
        <button class="button button--small" @click="onDelete(user)">delete</button>
        <a class="button button--small" :href="'/user/update/' + user._id">update</a>
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
    async onDelete (user) {
      if (window.confirm(`Are you sure you want to delete ${user.name} ${user.surname}`)){
        await UserService.deleteUser(user._id)
        const newUsersResponse = await UserService.getUsers()
        this.users = newUsersResponse.data
      }
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
