<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>home | midka.dev</title>
</svelte:head>

<!-- <LastFmWidget tracks={data.props.tracks} /> -->

<section class="general">
	<h1>Welcome!</h1>
	<h2>I'm Midka.<br /> A teenager who likes to do stuff.</h2>
	<div class="navigation-buttons">
		<div class="button-wrapper">
			<span>About me</span>
			<button>About me</button>
		</div>
		<div class="button-wrapper">
			<span>Blog</span>
			<button>Blog</button>
		</div>
		<div class="button-wrapper">
			<span>Projects</span>
			<button>Projects</button>
		</div>
		<div class="button-wrapper">
			<span>Contact</span>
			<button>Contact</button>
		</div>
	</div>
	<!-- <p>teen who likes to help others</p> -->
	<!-- <a href="https://www.google.com/maps/place/Helsinki"> @ Helsinki, Finland </a> -->
</section>

<!-- <section class="general">
	<h2>about me</h2>
	I have many hobbies including programming, music, photography and some sports. I usually play badminton,
	floorball and basketball. I also like to play video games.
</section>

<section class="general">
	<h2>Last FM</h2>
	<JsonViewer jsonData={data} />
</section> -->

<style lang="scss">
	section.general {
		margin: 1rem 0;
		gap: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.navigation-buttons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 100%;
		gap: 1rem;
		// justify-content: space-between;
	}

	@media (max-width: 1000px) {
		.navigation-buttons {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
