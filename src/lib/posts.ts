'use server';
export type Posts = Post[];

export interface Post {
	ID: string;
	title: string;
	content: string;
	lang: string;
	date: string;
	image_id: any;
	image_url: any;
}

export async function getPosts(params: string): Promise<Posts> {
	const response = await fetch(
		`https://api.yulbasali.uz/api/posts/${params}`,
		{
			cache: 'force-cache',
			// next: {
			// 	revalidate: 3600,
			// },
		}
	);
	return response.json();
}
