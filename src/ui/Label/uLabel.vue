<template>
    <label :class="$style.label">
      <slot></slot>
    </label>
</template>

<script>
	export default {
		name: 'u-label'
	}
</script>

<style lang="scss" module>
.label {
  display: block;
  cursor: pointer;
}
</style>