import { env } from '$env/dynamic/private';
import { env as pubEnv } from '$env/dynamic/public';
import { LastFMClient } from '$lib/lastfm.client';
import { WriteFreelyClient } from '$lib/writefreely.client';

export async function load() {
	const apiClient = new LastFMClient(env.LASTFM_API_KEY || '', pubEnv.PUBLIC_LASTFM_USER || '');

	const tracks = await apiClient.getRecentTracks(2);

	const wfClient = new WriteFreelyClient(env.WF_INSTANCE || '', env.WF_COLLECTION || '');

	const posts = await wfClient.getPosts();

	return {
		props: {
			tracks,
			posts
		}
	};
}
