import Partners from '../../Components/Layouts/Partners';
import HeroSection from '../../Components/Layouts/HeroSection';
import DeparturesSection from '../../Components/Layouts/DeparturesSection';
import Graduate from '../../Components/Layouts/Graduate';
import InformationSection from '../../Components/Layouts/InformationSection';
import SubmitDocuments from '../../Components/Layouts/SubmitDocuments';
import { getPosts } from '@/lib/posts';

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
	params: { locale },
}: {
	params: { locale: string };
}) {
	console.log(locale);
	const dataPosts = await getPosts(locale);
	return (
		<>
			<HeroSection />
			<Partners />
			<DeparturesSection />
			{/* <Graduate /> */}
			<InformationSection data={dataPosts} params={locale} />
			<SubmitDocuments />
		</>
	);
}
