<template>
	<p :class="$style.hint">
		<slot></slot>
	</p>
</template>

<script>
	export default {
		name: 'u-hint'
	}
</script>

<style lang="scss" module>
.hint {
  color: #868e96;
  line-height: 1.4;
  margin-bottom: 10px;
}
</style>