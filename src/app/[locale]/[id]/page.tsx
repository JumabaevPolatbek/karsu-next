// import { useRouter } from 'next/router';

import { getMenuById } from './action';
import { getPages } from '@/lib/pages';
import { Menu, Menus } from '@/redux/types/menu';
import { cookies } from 'next/headers';
async function getMenuByID(params: string) {
	const response = await fetch(`https://api.yulbasali.uz/api/${params}`);
	return response.json();
}
// export async function generateStaticParams() {
//     const data: Menus = await fetch('http://localhost:3000/api/menu').then(
//         (res) => res.json()
//     );
//     console.log(data);
//     return data.map((menu: Menu) => ({
//         id: menu.id,
//         title: menu.title,
//     }));
// }
export default async function Page({
	params,
}: {
	params: { id: string; locale: string; title: string };
}) {
	// const dataMenu = getMenuById(params.id);
	const data = await getPages(params.id);
	console.log(data);
	console.log(params);
	return <div>hello</div>;
}
