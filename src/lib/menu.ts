'use server';

import { Menu } from '@/redux/types/menu';

export async function getPageById(params: string): Promise<Menu> {
	const response = await fetch(
		`https://api.yulbasali.uz/api/getMenu/${params}`
	);
	return response.json();
}
