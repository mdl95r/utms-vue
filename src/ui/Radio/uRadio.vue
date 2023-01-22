<template>
	<u-label :class="$style.radioLabel"><slot></slot>
		<u-input type="radio" :class="$style.radioInput"/>
		<span :class="$style.radio"></span>
	</u-label>
</template>

<script>
	export default {
		name: 'u-radio'
	}
</script>

<style lang="scss" module>
.radioLabel {
	padding-left: 36px;
	margin-bottom: 10px;
}

.radioInput {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  appearance: none;
  &:checked + .radio {
		&:after {
			background-image: url('../../assets/img/radio-checked.svg');
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
		background-image: url('../../assets/img/radio.svg');
	}
}

</style>