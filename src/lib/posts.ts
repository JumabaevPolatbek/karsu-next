'use server';
export type Posts = Post[];

export interface Post {
	ID: number;
	title: string;
	content: string;
	lang: string;
	date: string;
	image_id?: string;
	image_url?: string;
}

export async function getPosts(params: string): Promise<Posts> {
	const response = await fetch(
		`https://apikarsu.karsu.uz/api/posts/${params}`,
		{
			cache: 'force-cache',
			// next: {
			// 	revalidate: 3600,
			// },
		}
	);
	return response.json();
}
