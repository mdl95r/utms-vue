<template>
<div :class="[$style.group, { [$style[typeField]]: typeField }]">
	<slot></slot>
</div>
</template>

<script>
	export default {
		name: 'u-fieldgroup',

		props: {
			typeField: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" module>
.group {
  &.radio {
    margin-bottom: 30px;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &.edit {
    display: grid;
    gap: 0 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>