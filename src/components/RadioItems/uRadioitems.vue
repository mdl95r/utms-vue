<template>
	<div v-for="(radio, index) in radios" :key="radio.id" :class="$style.radioItem">
		<Radio :id="radio.id" :index="index" :selectedRadioId="selectedRadioId" @change-radio="changeRadio" >{{ radio.name }}</Radio>
	</div>
</template>

<script>

import Radio from '@/ui/Radio/uRadio.vue';

export default {
	name: 'URadioitems',

	components: {
		Radio
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

<style lang="scss" module>
.radioItem {
	position: relative;

	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
}
</style>