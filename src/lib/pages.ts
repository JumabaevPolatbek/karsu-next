'use server';

import { Menu } from '@/redux/types/menu';

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
		`https://apikarsu.karsu.uz/api/getMenu/${params}`
	);
	return response.json();
}
