// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'es6-promise-always'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import echarts from 'echarts'
import $ajax from './ajax'
import clickoutside from './directives/clickoutside'
import store from './store'
import './less/theme.scss'
import VueAMap from 'vue-amap'

Vue.use(Element, { locale })

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'cfa87b97f9be63bbe53fac563524f28b',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'Geocoder', 'Geolocation', 'MapType', 'OverView']
})
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.directive('clickoutside', clickoutside)
//  Vue.directive('test', (e, b, v) => {
//    console.log(e, b, v)
//    e.innerHTML = b.expression
//  })

Vue.directive('test', {
  inserted: (el, binding) => {
    console.log(binding)
    el.innerHTML = binding.expression
  }
})
Vue.use($ajax)
// Vue.prototype.$ajax = $ajax

router.beforeEach((to, from, next) => {
  NProgress.start()
  setTimeout(() => {
    next()
  }, 400)
})

router.afterEach(() => {
  NProgress.done()
})

console.log(store.state.module1.name)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
