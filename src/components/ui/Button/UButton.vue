<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'UButton'
};
</script>

<style lang="scss" scoped>
.button {
	display: flex;
	align-items: center;
	color: var(--color-white);
	padding: 10px 25px 10px 10px;
	border-radius: 4px 0px 0px 4px;
	transition: opacity 0.4s;
	background: var(--color-dark);
	cursor: pointer;

	&:hover {
		background: var(--color-pink);
		transition: 0.2s;
	}

	&[disabled] {
		opacity: 0.65;
		transition: opacity 0.4s;
		cursor: not-allowed;

		&:hover {
			background: var(--color-dark);
		}
	}
}
</style>