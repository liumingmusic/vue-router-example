<template>
  <div>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/Page01">正常路由</router-link>
    <router-link to="/Page02/1111">动态参数</router-link>
    <router-link :to="page03">Page03</router-link>
    <router-link :to="page04">动态参数</router-link>
    <router-link to="/Page05">Page05</router-link>
    <router-link :to="{ name: 'Page06', params: { userId: 123 }}">命名路由</router-link>
    <router-link to="/Page07">命名视图</router-link>
    <br>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition>
      <router-view></router-view>
    </transition>
    <br>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function(){
    return {
        page03:'/Page03',
        page04:'/Page04/02101100112'
    }
  },
  components: {

  }
}
</script>

<style>

</style>
