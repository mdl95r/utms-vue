<template>
    <label class="label">
      <slot></slot>
    </label>
</template>

<script>
export default {
	name: 'ULabel'
};
</script>

<style lang="scss" scoped>
.label {
	display: block;
	cursor: pointer;
}
</style>