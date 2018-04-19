<template>
  <div>

    <h1 class="title">Create a user</h1>
    <form>
      <input
        type="text"
        name="name"
        autocomplete="off"
        placeholder="Name"
        v-model="name">
      <br>
      <input
        type="text"
        name="surname"
        autocomplete="off"
        placeholder="Surname"
        v-model="surname">
      <br>

      <button
        v-if="!id"
        type="button"
        @click="add">
          Create user
      </button>

      <button
        v-if="id"
        type="button"
        @click="update">
          Update user
      </button>
    </form>

    <div v-if="newUser.name">
      <hr>
      <h1>{{newUser.name}} ({{newUser.surname}})</h1>
      {{newUser._id}}
    </div>

    <br>

    <router-link to="/users">Back to users</router-link>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  name: 'NewUser',
  props: [
    'id'
  ],
  data () {
    return {
      name: '',
      surname: '',
      newUser: {}
    }
  },
  methods: {
    async add () {
      const response = await UserService.createUser({
        name: this.name,
        surname: this.surname
      })
      const newUser = await UserService.getUser(response.data.ops[0]._id)
      this.newUser = newUser.data
    },
    async update () {
      const response = await UserService.updateUser(this.id, {
        name: this.name,
        surname: this.surname
      })
      this.newUser = response.data
    }
  },
  async beforeMount () {
    if (this.id) {
      const response = await UserService.getUser(this.id)
      this.name = response.data.name
      this.surname = response.data.surname
    }
  }

}
</script>

<style scoped>

</style>
