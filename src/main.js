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
import NotFoundComponent from './components/NotFoundComponent'
import Page08 from './components/page_08'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
    path: '/',
    redirect: '/Page01' //重定向
}, {
    path: '/Page01',
    component: Page01,
    alias: '/Page01_another_name' //url别名
}, {
    path: '/Page02/:id',
    component: Page02
}, {
    path: '/Page03',
    component: Page03,
    //某个路由独享的钩子
    beforeEnter: function(to, from, next) {
        console.log("某个路由独享的钩子");
        next();
    }
}, {
    path: '/Page04/:id',
    component: Page04
}, {
    path: '/Page05',
    component: Page05,
    children: [{
        path: '',
        component: Page0501
    }, {
        path: 'Page0501',
        component: Page0501
    }, {
        path: 'Page0502',
        component: Page0502
    }]
}, {
    path: '/Page06/:userId',
    name: 'Page06',
    component: Page06
}, {
    path: '/Page07',
    components: {
        default: Page07,
        a: Page0701,
        b: Page0702
    }
}, {
    path: '/Page08',
    name: 'Page08',
    component: Page08
}, {
    path: '*', // 404匹配
    component: NotFoundComponent
}];

//路由组装
const router = new VueRouter({
    mode: 'history', //HTML5 History  需要后台配置，不是很好玩
    routes: routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

//路由全局钩子
router.beforeEach(function(to, from, next) {
    console.log("全局的钩子");
    //必须要next()不然走不下去
    next();
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    ...App
})
