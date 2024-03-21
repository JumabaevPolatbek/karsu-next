import Article from '@/Components/Article';
import { getPostById } from './actions';
import { Post, Posts } from '@/lib/posts';
type Params = {
    params: { locale: string };
};
export async function generateStaticParams({
    params: { locale },
}: Params): Promise<Posts> {
    const response = await fetch(
        `https://apikarsu.karsu.uz/api/posts/${locale}`
    );
    const data = response.json();
    return (await data).map((post: Post) => post);
}

type Props = {
    params: {
        locale: string;
        slug: string;
    };
    searchParams: {};
};

async function Page(props: Props) {
    const {
        params: { locale, slug },
    } = props;
    console.log(props);
    const data = await getPostById(slug);
    return <Article data={data} />;
}

export default Page;
