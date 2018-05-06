import Api from '@/services/Api'

export default {
  createExercises (data) {
    return Api().post('/exercises', data)
  },
  getExercises (id) {
    return Api().get(`/exercises/${id}`)
  },
  createJournal (workoutId) {

    return Api().post(`/journal/`, {workoutId: workoutId})
  },
  addToJournal (data) {
    return Api().post(`/journal/exercise`, data)
  },
  closeJournal(journalId){
    console.log(journalId)
    return Api().put(`/journal/close`, {journalId: journalId})
  }
}
