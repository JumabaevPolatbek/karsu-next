'use server';

export async function getPosts(params: string) {
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
