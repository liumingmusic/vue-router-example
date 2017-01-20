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
import Page06 from './components/page_06'
import Page07 from './components/page_07'
import Page0701 from './components/page_0701'
import Page0702 from './components/page_0702'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Page01
},{
  path : '/Page01',
  component : Page01
},{
  path : '/Page02/:id',
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
},{
  path: '/Page06/:userId',
  name: 'Page06',
  component: Page06
},{
  path: '/Page07',
  components: {
    default: Page07,
    a: Page0701,
    b: Page0702
  }
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
