import EventBus from '@/helpers/EventBus'

export default {
  setUser( user ){
    delete user.password
    window.localStorage.setItem('user', JSON.stringify(user) )
    EventBus.$emit('localStorage:user:updated', user )
  },
  getUser(){
    const user = window.localStorage.getItem('user' )
    return JSON.parse(user)
  }
}