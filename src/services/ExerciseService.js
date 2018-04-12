import Api from '@/services/Api'

export default {
  createExercises (data) {
    return Api().post('/exercises', data)
  },
  getExercises (id) {
    return Api().get(`/exercises/${id}`)
  },

  createJournal (data) {
    return Api().post(`/journal/`, data)
  }
}
