<script lang="ts">
	import JsonViewer from "$components/JSONViewer.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>home | midka.dev</title>
</svelte:head>

<section>
	<h1>midka</h1>
	<p>teen who likes to help others</p>
	<a href="https://www.google.com/maps/place/Helsinki"> @ Helsinki, Finland </a>
</section>

<section>
	<h2>about me</h2>
	I have many hobbies including programming, music, photography and some sports. I usually play badminton,
	floorball and basketball. I also like to play video games.
</section>

<section>
	<h2>Last FM</h2>
	<JsonViewer jsonData={data} />	
</section>
