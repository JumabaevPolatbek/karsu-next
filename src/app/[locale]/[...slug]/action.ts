'use server';
type Page = {
	ID: number;
	title: string;
	content: string;
	lang: string;
	date: string;
};
export async function getMenuById(params: string): Promise<Page> {
	const response = await fetch(
		`https://apikarsu.karsu.uz/api/page/${params}`
	);
	return response.json();
}
