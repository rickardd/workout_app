import Api from '@/services/Api'

export default {
  createSet (data) {
    return Api().post('/set', data)
  },
  getSet (id) {
    return Api().get(`/set/${id}`)
  }
}
