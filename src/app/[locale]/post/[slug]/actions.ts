import { Post } from '@/lib/posts';

export async function getPostById(params: string): Promise<Post> {
	const response = await fetch(
		`https://apikarsu.karsu.uz/api/post/${params}`,
		{
			next: {
				revalidate: 10,
			},
		}
	);
	return response.json();
}

export async function getPosts(params: string) {
	const response = await fetch(
		`https://apikarsu.karsu.uz/api/posts?lang=${params}&limit6`,
		{
			next: {
				revalidate: 10,
			},
		}
	);
	return response.json();
}
