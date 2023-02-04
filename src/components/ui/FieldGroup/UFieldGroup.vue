<template>
	<div class="group" :class="[{ [type]: type }]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'UFieldGroup',

	props: {
		type: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
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