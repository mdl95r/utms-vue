<template>
	<div v-clickOutSide="clickOutSide" :class="[$style.dropdown, { [$style.dropdownopen]: isDropDownOpen }]">
		<u-button :class="$style.dropdownCurrent" @click="clickOpenHandler">{{ selectedOption }}</u-button>
		<div :class="$style.dropdownList">
			<div v-for="option in options" :key="option" :class="$style.dropdownItem" @click="clickItemHandler(option)">{{ option }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UDropdown',

	props: {
		options: {
			type: Array,
			required: true
		},
		selectedOption: {
			type: String,
			required: true,
		}
	},

	emits: ["click-item"],

	data() {
		return {
			isDropDownOpen: false
		};
	},

	methods: {
		clickOpenHandler(e) {
			e.preventDefault();
			this.isDropDownOpen = !this.isDropDownOpen;
		},

		clickItemHandler(item) {
			this.$emit('click-item', item);
			this.isDropDownOpen = false;
		},

		clickOutSide() {
			this.isDropDownOpen = false;
		}
	}
};
</script>

<style lang="scss" module>
.dropdown {
	position: relative;

	@media (max-width: 767px) {
		flex: 0 1 100%;
		margin-bottom: 10px;
	}

	@media (min-width: 768px) {
		flex-basis: 100px;
	}
}

.dropdownopen {
	.dropdownCurrent {
		&:after {
			top: 16px;
			transform: rotate(180deg);
			transition: 0.3s;
		}
	}

	.dropdownList {
		opacity: 1;
		visibility: visible;
	}
}

.dropdownCurrent {
	position: relative;
	user-select: none;
	width: 100%;
	height: 38px;

	&:after {
		position: absolute;
		top: 17px;
		right: 8px;
		content: '';
		border-top: 4px solid #fff;
		border-right: 4px solid transparent;
		border-bottom: 0;
		border-left: 4px solid transparent;
		transition: 0.3s;
	}
}

.dropdownList {
	position: absolute;
	top: 100%;
	width: 100%;
	opacity: 0;
	visibility: hidden;
	z-index: 100;
	background: #fff;
}

.dropdownItem {
	padding: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	cursor: pointer;
	user-select: none;
}
</style>