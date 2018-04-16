import Api from '@/services/Api'

export default {
  createWorkout (credentials) {
    return Api().post('/workout', credentials)
  },
  getWorkouts () {
    return Api().get(`/workout/`)
  },
  getWorkout (id) {
    return Api().get(`/workout/${id}`)
  }
}
