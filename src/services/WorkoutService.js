import Api from '@/services/Api'

export default {
  createWorkout (credentials) {
    return Api().post('/workout', credentials)
  },
  getWorkout (id) {
    return Api().get(`/workout/${id}`)
  }
  // getWorkouta () {
  //   return Api().get('/workouts')
  // }
  // updateWorkout (id, credentials) {
  //   return Api().put(`/workout/${id}`, credentials)
  // },
  // deleteWorkout (id) {
  //   return Api().delete(`/workout/${id}`)
  // }
}
