<template>
	<u-popup class="popupCopy" :class="[{ visible: isVisible }]">Ссылка скопирована!</u-popup>
</template>

<script>
export default {
	name: 'UPopupCopy',
	props: {
		isVisible: {
			type: Boolean,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.popupCopy {
	max-width: 300px;
	height: 40px;
	right: 0;
	bottom: -999px;
	padding: 5px;
	color: var(--color-white);
	padding: 5px;
	background-color: var(--color-pink);
}

.visible {
	visibility: visible;
	bottom: 0;
	opacity: 1;
	transition: 0.8s;
}
</style>