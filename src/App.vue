<template>
  <div>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/Page01">Page01</router-link>
    <router-link to="/Page02">Page02</router-link>
    <router-link to="/Page03">Page03</router-link>
    <router-link to="/Page04/02101100112">动态参数</router-link>
    <router-link to="/Page05">Page05</router-link>
    <br>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

</style>
