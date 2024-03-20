// import { useRouter } from 'next/router';

import { getMenuById } from './action';
import parser from 'html-react-parser';

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
	params: { locale: string; slug: [string] };
}) {
	const { slug } = params;
	const dataMenu = await getMenuById(slug[slug.length - 1]);
	return <div className="container">{parser(dataMenu.content)}</div>;
}
