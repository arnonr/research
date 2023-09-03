import Vue from 'vue'

// axios
import axios from 'axios'


const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: location.port == '8000' ? 'http://localhost:8000/api/' : 'http://localhost/research/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

export default axiosIns
