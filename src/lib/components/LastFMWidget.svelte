<script lang="ts">
	import ExternalLinkIcon from '$components/ExternalLinkIcon.svelte';
	import InfoSquareIcon from '$components/InfoSquareIcon.svelte';
	import { env } from '$env/dynamic/public';
	import { combineTracks, type LastFMRecentTracks } from '$lib/lastfm.client';

	export let tracks: LastFMRecentTracks;

	const track = combineTracks(tracks.tracks);
</script>

<section aria-label="last.fm recently listened to" class="container">
	<h2>Recently listened to</h2>
	<div class="content-container">
		<img src={track.image[2].uri} alt={`Cover image for ${track.name}`} />
		<div aria-label="info about track" class="info">
			<div aria-label="name and artist" class="data">
				<p aria-label="track name">{track.name}</p>
				<p aria-label="artist name">By {track.artist.name}</p>
				<p aria-label="album name">Album: {track.album.name}</p>
			</div>
			<div aria-label="actions" class="actions">
				<a href={track.url} target="_blank"
					>View Track
					<ExternalLinkIcon />
				</a>
				<a href={`https://last.fm/user/${env.PUBLIC_LASTFM_USER}`} target="_blank"
					>Last.FM profile
					<ExternalLinkIcon />
				</a>
			</div>
		</div>
		<div class="info-icon">
			<InfoSquareIcon
				label="Last.FM Widget"
				description="shows my recently listened to track & info about it"
				on:click={() => alert('clicked')}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	@use '../../styles/colors.scss' as *;

	img {
		object-fit: contain;
		height: 125px;
	}

	.container {
		position: absolute;
		top: 2rem;
		left: 2rem;

		border: 1px solid $light;
		padding: 0.5rem 0.75rem;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;

		> h2 {
			font-size: 2rem;
		}
	}

	.content-container {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: max-content;
	}

	.data {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.actions {
		display: flex;
		gap: 0.5rem;
		height: auto;
		max-height: 40px;

		> * {
			height: auto;
			width: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;

			background-color: $light;
			color: $background;
			padding: 0.5rem 0.75rem;

			transition: all 0.2s ease-in-out;

			// fixes elements moving when hovered
			border: 1px solid transparent;

			&:nth-child(1) {
				background-color: $primary;

				&:hover,
				&:focus {
					background-color: transparent;
					border: 1px solid $primary;
					color: $light;
				}
			}

			&:hover,
			&:focus {
				background-color: transparent;
				border: 1px solid $light;
				color: $light;
			}
		}
	}

	.info-icon {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		--size: 2.25rem;

		cursor: pointer;

		&:hover,
		&:focus,
		&:focus-within {
			color: $primary;
		}

		transition: all 0.2s ease-in-out;
	}
</style>
