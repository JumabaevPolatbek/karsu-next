import Partners from '../../Components/Layouts/Partners';
import HeroSection from '../../Components/Layouts/HeroSection';
import DeparturesSection from '../../Components/Layouts/DeparturesSection';
import Graduate from '../../Components/Layouts/Graduate';
import InformationSection from '../../Components/Layouts/InformationSection';
import SubmitDocuments from '../../Components/Layouts/SubmitDocuments';
import { Posts, getPosts } from '@/lib/posts';
import { promises } from 'dns';

export default async function Home({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const dataPosts = await getPosts(locale);
	// console.log(dataPosts);
	return (
		<>
			<HeroSection />
			<Partners />
			{/* <DeparturesSection /> */}
			{/* <Graduate /> */}
			<InformationSection data={dataPosts} params={locale} />
			<SubmitDocuments />
		</>
	);
}
