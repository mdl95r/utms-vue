<template>
	<p :class="$style.hint">
		<slot></slot>
	</p>
</template>

<script>
export default {
	name: 'UHint'
};
</script>

<style lang="scss" module>
.hint {
	color: #868e96;
	line-height: 1.4;
}
</style>