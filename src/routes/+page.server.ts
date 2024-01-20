import { env } from '$env/dynamic/private';
import { LastFMClient } from '$lib/lastfm.client';

export async function load() {
	const apiClient = new LastFMClient(env.LASTFM_API_KEY || '', env.LASTFM_USER || '');

	const tracks = await apiClient.getRecentTracks(1);

	return {
		props: {
			tracks
		}
	};
}
