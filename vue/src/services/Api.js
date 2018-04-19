import axios from 'axios'

export default () => {
  const URL = window.location.hostname === "localhost"
    ? 'http://localhost:3001/'
    : '/'

  return axios.create({
    baseURL: URL
  })
}
