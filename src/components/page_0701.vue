<template>
	<div>
		<h1>page_0701</h1>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from, next) {
	// 在渲染该组件的对应路由被 confirm 前调用
	// 不！能！获取组件实例 `this`
	// 因为当钩子执行前，组件实例还没被创建
		next(vm => {
			// 通过 `vm` 访问组件实例
			console.log("组件内的钩子 beforeRouteEnter");
			console.log(vm);
		})
	},
	beforeRouteLeave (to, from, next) {
		// 导航离开该组件的对应路由时调用
		// 可以访问组件实例 `this`
		console.log("组件内的钩子 beforeRouteLeave");
		next();
	},
	data () {
		return {
		  
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
