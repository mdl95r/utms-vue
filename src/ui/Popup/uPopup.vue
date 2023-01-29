<template>
	<div :class="$style.popup">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'UPopup'
};
</script>

<style lang="scss" module>
.popup {
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: hidden;
	position: fixed;
	transition: 0.4s;
	opacity: 0;
}
</style>