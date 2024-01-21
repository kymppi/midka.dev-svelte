<script lang="ts">
	export let jsonData: any;
</script>

<div class="json-viewer">
	{#if jsonData}
		<pre>{JSON.stringify(jsonData, null, 2)}</pre>
	{:else}
		<p>No JSON data provided</p>
	{/if}
</div>

<style>
	.json-viewer {
		max-height: 300px; /* Adjust the height as needed */
		overflow-y: auto;
		border: 1px solid #ccc; /* Optional: Add a border for better visualization */
		padding: 10px;
		max-width: 50vw;
	}
</style>
