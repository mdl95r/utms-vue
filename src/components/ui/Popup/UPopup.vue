<template>
	<div class="popup">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'UPopup'
};
</script>

<style lang="scss" scoped>
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