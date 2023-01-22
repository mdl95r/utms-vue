<template>
	<h2 :class="$style.title">
		<slot></slot>
	</h2>
</template>

<script>
	export default {
		name: 'u-title'
	}
</script>

<style lang="scss" module>
.title {
  font-size: 19px;
  font-weight: 300;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 21px;
    margin-bottom: 20px;
  }
}
</style>