<script>
import { h } from 'vue';

export default {
	name: 'UTitle',
	props: {
		level: {
			type: [String, Number],
			default: 2
		},

		size: {
			type: [String, Number],
			default: 14
		}
	},

	render() {
		return h(
			`h${this.level}`,
			{ class: ['title', `fz-${this.size}`] },
			this.$slots.default()
		);
	}
};
</script>

<style lang="scss" scoped>
.title {
	font-weight: 300;
}
</style>