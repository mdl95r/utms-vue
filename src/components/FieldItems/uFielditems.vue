<template>
	<div v-for="field in fields" :key="field.name" class="flex" :class="$style.fieldItem">
		<u-fieldlabel :name="field.name" :class="$style.label"/>
		<u-input v-model="values[field.name]" type="text" :placeholder="field.placeholder"  />

		<u-hint v-if="hints[field.hint]" :class="$style.hint">{{ hints[field.hint] }}</u-hint>
	</div>
</template>

<script>
export default {
	name: 'UFielditems',
	props: {
		fields: {
			type: Array,
			required: true
		},

		values: {
			type: Object,
			required: true
		},

		hints: {
			type: Object,
			required: true
		}
	},
};
</script>

<style lang="scss" module>
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