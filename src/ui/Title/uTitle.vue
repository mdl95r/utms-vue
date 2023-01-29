<template>
	<h2 :class="$style.title">
		<slot></slot>
	</h2>
</template>

<script>
	export default {
		name: 'UTitle'
	};
</script>

<style lang="scss" module>
.title {
  font-size: 19px;
  font-weight: 300;
}
</style>