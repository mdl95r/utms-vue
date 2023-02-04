<template>
	<u-label class="radioLabel"><slot></slot>
		<u-input :id="id" type="radio" class="radioInput" name="radio" :checked="id === selectedRadioId" @change="changeRadio(id)"/>
		<span class="radio"></span>
	</u-label>
</template>

<script>
export default {
	name: 'URadio',

	props: {
		id: {
			type: String,
			required: true
		},

		selectedRadioId: {
			type: String,
			required: true
		}
	},

	emits: ["change-radio"],

	methods: {
		changeRadio(id) {
			this.$emit('change-radio', id);
		}
	}
};
</script>

<style lang="scss" scoped>
.radioLabel {
	padding-left: 36px;
}

.radioInput {
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	appearance: none;

	&:checked+.radio {
		&:after {
			background-image: url('../../../assets/img/radio-checked.svg');
		}
	}
}

.radio {
	position: absolute;
	left: 0;

	&:after {
		position: absolute;
		top: -4px;
		content: "";
		width: 20px;
		height: 20px;
		background-image: url('../../../assets/img/radio.svg');
	}
}
</style>