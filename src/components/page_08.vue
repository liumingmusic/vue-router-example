<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      var v_this = this;
      v_this.error = v_this.post = null;
      window.setTimeout(function(){
        v_this.loading = false;
        v_this.post = {
          title:"xxxx",
          body:"mmmmmmmmmmmmmmmmmmmmmmm"
        }
      }, 3000)
    }
  }
}
</script>