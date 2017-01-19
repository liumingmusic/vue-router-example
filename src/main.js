// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Page01 from './components/page_01'
import Page02 from './components/page_02'
import Page03 from './components/page_03'
import Page04 from './components/page_04'
import Page05 from './components/page_05'
import Page0501 from './components/page_0501'
import Page0502 from './components/page_0502'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Page01
},{
  path : '/Page01',
  component : Page01
},{
  path : '/Page02/',
  component : Page02
},{
  path : '/Page03',
  component : Page03
},{
  path : '/Page04/:id',
  component : Page04
},{
  path : '/Page05',
  component : Page05,
  children: [
    {
      path: '',
      component: Page0501
    },{
      path: 'Page0501',
      component: Page0501
    },{
      path: 'Page0502',
      component: Page0502
    }
  ]
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
