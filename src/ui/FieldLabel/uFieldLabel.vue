<template>
	<span :class="$style.fieldName">{{ name }}</span>
</template>

<script>
	export default {
		name: 'u-fieldlabel',
		props: {
			name: {
				type: String,
				required: true,
			}
		}
	}
</script>

<style lang="scss" module>
.fieldName {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #e9ecef;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    flex: 0 1 130px;
    border-right: none;
  }
}
</style>