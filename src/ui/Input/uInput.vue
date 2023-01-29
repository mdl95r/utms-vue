<template>
	<input :value="modelValue" @input="updateInput"/>
</template>

<script>
export default {
	name: 'UInput',
	props: {
		modelValue: {
			type: String,
			default: '',
		},
	},

	emits: ["update:modelValue"],

	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		}
	}
};
</script>

<style lang="scss" module>
input:not(input[type='radio']) {
	flex: 1 1 auto;
	height: 38px;
	color: #495057;
	padding: 5px;
	border: 1px solid rgba(0, 0, 0, 0.15);

	&::placeholder {
		color: rgb(153, 153, 153);
	}

	&:focus {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		transition: 0.1s;
	}
}

input[readonly] {
	cursor: default;
}
</style>