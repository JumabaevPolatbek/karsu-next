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
