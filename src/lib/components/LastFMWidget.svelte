<script lang="ts">
	import ExternalLinkIcon from "$components/ExternalLinkIcon.svelte";
	import { env } from "$env/dynamic/public";
	import { combineTracks, type LastFMRecentTracks } from "$lib/lastfm.client";

    export let tracks: LastFMRecentTracks;

    const track = combineTracks(tracks.tracks)

</script>

<div aria-label="last.fm recently listened to" class="lastfm-widget">
    <img src={track.image[2].uri} alt={`Cover image for ${track.name}`} />
    <div aria-label="info about track" class="lastfm-widget__info">
        <div aria-label="name and artist" class="lastfm-widget__info__name" >
            <p aria-label="track name">{track.name}</p>
            <p aria-label="artist name">By {track.artist.name}</p>
            <p aria-label="album name">Album: {track.album.name}</p>
        </div>
        <div aria-label="actions" class="lastfm-widget__info__actions">
            <a href={track.url} target="_blank">View Track
                <ExternalLinkIcon />
            </a>
            <a href={`https://last.fm/user/${env.PUBLIC_LASTFM_USER}`} target="_blank">Last.FM profile
                <ExternalLinkIcon />
            </a>
        </div>
    </div>
</div>

