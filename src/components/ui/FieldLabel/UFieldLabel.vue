<template>
	<span class="fieldName">{{ name }}</span>
</template>

<script>
export default {
	name: 'UFieldlabel',
	props: {
		name: {
			type: String,
			required: true,
		}
	}
};
</script>

<style lang="scss" scoped>
.fieldName {
	display: flex;
	flex-basis: 100%;
	align-items: center;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.15);
	background-color: var(--fieldnameBG);

	@media (max-width: 767px) {
		margin-bottom: 10px;
	}

	@media (min-width: 768px) {
		flex: 0 1 130px;
		border-right: none;
	}
}
</style>