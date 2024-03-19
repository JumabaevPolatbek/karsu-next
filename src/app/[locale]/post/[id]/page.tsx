import Article from '@/Components/Article';
import { getPostById } from './actions';

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
	console.log(data);
	return <Article data={data} />;
}

export default Page;
