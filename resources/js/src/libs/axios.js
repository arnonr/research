import Vue from 'vue'

// axios
import axios from 'axios'

let urlNew = '';
if(location.port  == '8000'){
    urlNew = 'http://localhost:8000/api/';
}else{
    if(location.hostname == 'localhost'){
        urlNew = 'http://localhost/idemt/research/api/';
    }else{
        urlNew = 'http://sci.kmutnb.ac.th/idemt/research/api/';
    }
}

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: urlNew,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

export default axiosIns
