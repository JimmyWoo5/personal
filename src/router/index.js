import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: {template: '<router-view />'},
    //  component: resolve => require(['@/views/home/home'], resolve),
      meta: {
        requiresAuth: true
      },
      children: [{
        path: '',
        name: 'home',
        component: resolve => require(['@/views/home/home'], resolve),
        meta: {
          requiresAuth: true
        }
      }, {
        path: '/home/detail/:id',
        name: 'home-detail',
        component: resolve => require(['@/views/home/detail'], resolve),
        meta: {
          requiresAuth: true
        }
      }]
    }, {
      path: '/org',
      name: 'org',
      component: resolve => require(['@/views/org/org2'], resolve),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/sal',
      name: 'sal',
      component: resolve => require(['@/views/sal/sal'], resolve),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/charts',
      name: 'charts',
      component: resolve => require(['@/views/charts/chart'], resolve),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/map',
      name: 'map',
      component: resolve => require(['@/views/map/map'], resolve),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/buy',
      name: 'buy',
      component: resolve => require(['@/views/buy/buy'], resolve),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/formula',
      name: 'formula',
      component: resolve => require(['@/views/formula/formula'], resolve),
      meta: {
        requiresAuth: true
      }
    }
  ]
})
