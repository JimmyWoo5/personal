import axios from 'axios'
import store from '../store'
// import Vue from 'vue'
// import Element from 'element-ui'

var $ajax = axios.create({
  headers: {
    'token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdGFmZl9pZCI6IjNhMTYzZWUyMGFlZDQ1NDdiNWNlNDIzMmYxNzUxOTY4IiwiY29tX2lkIjoiMWRhNDA0OWI5ZTM4NGIyYjk0Y2Y4NjI5ZDAyOWM5MjEiLCJpc3MiOiJXb3JkSFIiLCJleHAiOjE1MTQ2MDU3NDcsImlhdCI6MTUxNDUxOTM0N30.WVwFJA72AtnEWUBse2IaFDh9AGqVgPWoumNsLE4veOk',
    'X-Anti-Request-Token': '0c5d8ef94763dbe209cabad05ac3e0b2'
  },
  baseURL: `http://localhost:1000${store.state.server}`,
  params: {
    _: 24243224
  }
//  validateStatus: (status) => {
//    if (status === 200) {
//      Element.Message.success('成功')
//    }
//    return status
//  }
})

//  $ajax.interceptors.response.use((response) => {
//    // Do something with response data
//    return response.data
//  }, (error) => {
//    // Do something with response error
//    return Promise.reject(error)
//  })
var NOOP = () => {}
var http = (opts) => {
  opts.done = opts.done || NOOP
  opts.fail = opts.fail || NOOP
  opts.always = opts.always || NOOP
  $ajax(opts).then(res => {
    opts.done(res.data)
  }).catch(res => {
    opts.fail(res)
  }).always(() => {
    opts.always()
  })
}

export default {
  name: 'ajax',
  install (Vue) {
    Vue.prototype.$ajax = http
  }
}
