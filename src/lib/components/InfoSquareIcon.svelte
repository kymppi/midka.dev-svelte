<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label = 'Information';
	export let description = 'Additional information';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="100%"
	height="100%"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	fill="none"
	stroke-linecap="round"
	stroke-linejoin="round"
	role="button"
	tabindex="0"
	on:click={handleClick}
	on:keypress={(event) => event.key === 'Enter' && handleClick()}
	aria-label={label}
	aria-describedby="info-description"
>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M12 9h.01" />
	<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
	<path d="M11 12h1v4h1" />
</svg>

<!-- Additional information description -->
<div id="info-description" class="sr-only">
	{description}
</div>

<style>
	svg {
		width: var(--size);
		height: var(--size);
	}
</style>
