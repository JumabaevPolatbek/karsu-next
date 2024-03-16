'use server';
type Page = {
	id: string;
	title: string;
	content: string;
	lang: string;
	translations: string;
};
type lang = string;

export async function getPages(params: lang) {
	const response = await fetch(
		`https://api.yulbasali.uz/api/pages/{${params}}`
	);
	return response.json();
}