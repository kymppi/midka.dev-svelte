export interface WriteFreelyPost {
	id: string;
	slug: string;
	appearance: 'norm' | string;
	language: string;
	rtl: boolean;
	created: string;
	updated: string;
	title: string;
	body: string;
	tags: string[];
	paid: boolean;
	views: number;
}

export interface WriteFreelyCollection {
	alias: string;
	title: string;
	description: string;
	style_sheet: string;
	public: boolean;
	format: 'blog' | string;
	views: number;
	url: string;
	total_posts: number;
	posts: WriteFreelyPost[];
}

export class WriteFreelyClient {
	constructor(
		private readonly instance: string,
		private readonly collection: string
	) {}

	public async getPosts(): Promise<WriteFreelyPost[]> {
		const collection = await this.fetch<WriteFreelyCollection>(
			`/api/collections/${this.collection}/posts`
		);

		return collection.posts;
	}

	private async fetch<T>(path: string): Promise<T> {
		const url = new URL(path, this.instance);

		const response = await fetch(url);

		const data = await response.json();

		if (!isValid(response.status) || !isValid(data.code)) {
			throw new Error(data.error_msg);
		}

		return data.data;
	}
}

function isValid(status_code: number): boolean {
	return status_code >= 200 && status_code < 300;
}
