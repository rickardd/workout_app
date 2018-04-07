import Api from '@/services/Api'

export default {
  createWorkout (credentials) {
    return Api().post('/workout', credentials)
  },
  getWorkout (id) {
    return Api().get(`/workout/${id}`)
  }
}
