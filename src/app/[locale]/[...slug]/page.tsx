import { getMenuById } from './action';
import parser from 'html-react-parser';
import styes from '../../../styles/pageinfo/pageInfo.module.scss';
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
	return (
		<div className="container">
			<div className={styes['content']}>{parser(dataMenu.content)}</div>
		</div>
	);
}
