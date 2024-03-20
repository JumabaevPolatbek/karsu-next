import { getMenuById } from './action';
import parser from 'html-react-parser';

export default async function Page({
	params,
}: {
	params: { locale: string; slug: [string] };
}) {
	const { slug } = params;
	const dataMenu = await getMenuById(slug[slug.length - 1]);
	return <div className="container">{parser(dataMenu.content)}</div>;
}
