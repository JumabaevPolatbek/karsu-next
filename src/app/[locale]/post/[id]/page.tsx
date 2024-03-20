import Article from '@/Components/Article';
import { getPostById } from './actions';

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

type Props = {
	params: {
		locale: string;
		id: string;
	};
};

async function Page(props: Props) {
	const {
		params: { locale, id },
	} = props;
	const data = await getPostById(id);
	return <Article data={data} />;
}

export default Page;
