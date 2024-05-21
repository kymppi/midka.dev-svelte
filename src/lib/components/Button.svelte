<div class="wrapper">
	<span><slot /></span>
	<button><slot /></button>
</div>

<style lang="scss">
	@import '../../styles/mixins';
	@import '../../styles/colors';

	.wrapper {
		@include button($light, $background, button);
	}
</style>
