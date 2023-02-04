<template>
	<div v-for="radio in radios" :key="radio.id" class="radioItem">
		<u-radio :id="radio.id" :selected-radio-id="selectedRadioId" @change-radio="changeRadio" >{{ radio.name }}</u-radio>
	</div>
</template>

<script>

import URadio from '@/components/ui/Radio/uRadio.vue';

export default {
	name: 'URadioitems',

	components: {
		URadio,
	},

	props: {
		radios: {
			type: Array,
			required: true
		},

		selectedRadioId: {
			type: String,
			required: true
		}
	},

	emits: ['change-radio'],

	methods: {
		changeRadio(id) {
			this.$emit('change-radio', id);
			this.id = id;
		}
	}
};
</script>

<style lang="scss" scoped>
.radioItem {
	position: relative;

	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
}
</style>