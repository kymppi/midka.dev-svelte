import { env } from '$env/dynamic/private';
import { LastFMClient } from '$lib/lastfm.client';
import { WriteFreelyClient } from '$lib/writefreely.client';

export async function load() {
	const apiClient = new LastFMClient(env.LASTFM_API_KEY || '', env.LASTFM_USER || '');

	const tracks = await apiClient.getRecentTracks(1);

	const wfClient = new WriteFreelyClient(env.WF_INSTANCE || '', env.WF_COLLECTION || '')

	const posts = await wfClient.getPosts();

	return {
		props: {
			tracks,
			posts
		}
	};
}
