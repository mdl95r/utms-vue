<template>
	<div class="flex fieldItem">
		<u-fieldlabel :name="name" class="label"/>

		<u-input :value="modelValue" :placeholder="placeholder" @input="updateInput" />

		<p v-if="hint" class="hint">{{ hint }}</p>
	</div>
</template>

<script>
export default {
	name: 'UFieldItem',
	props: {
		modelValue: {
			type: String,
			default: '',
		},

		name: {
			type: String,
			required: true
		},

		hint: {
			type: [String],
			default: ''
		},

		placeholder: {
			type: String,
			required: true
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

<style lang="scss" scoped>
.hint {
	font-size: 11px;
	margin-top: 10px;
}

.fieldItem {
	align-items: flex-start;

	&:nth-of-type(1) {
		order: 0;
	}

	&:nth-of-type(2) {
		order: 1;

		@media (min-width: 768px) {
			order: 2;
		}
	}

	&:nth-of-type(3) {
		order: 2;

		@media (min-width: 768px) {
			order: 5;
		}
	}

	&:nth-of-type(4) {
		order: 4;

		@media (min-width: 768px) {
			order: 1;
		}
	}

	&:nth-of-type(5) {
		order: 5;

		@media (min-width: 768px) {
			order: 2;
		}
	}
}

.label {
	height: 38px;
}
</style>