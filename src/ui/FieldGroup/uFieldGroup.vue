<template>
<div :class="[$style.group, { [$style[typeField]]: typeField }]">
	<slot></slot>
</div>
</template>

<script>
export default {
	name: 'UFieldgroup',

	props: {
		typeField: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" module>
.group {
	&.radio {
		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}

	&.edit {
		display: grid;
		gap: 20px;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}
}
</style>