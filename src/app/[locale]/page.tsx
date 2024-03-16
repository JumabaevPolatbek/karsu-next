import Partners from '../../Components/Layouts/Partners';
import HeroSection from '../../Components/Layouts/HeroSection';
import DeparturesSection from '../../Components/Layouts/DeparturesSection';
import Graduate from '../../Components/Layouts/Graduate';
import InformationSection from '../../Components/Layouts/InformationSection';
import SubmitDocuments from '../../Components/Layouts/SubmitDocuments';
import { getPages } from '@/lib/pages';
import { getPosts } from '@/lib/posts';

export default async function Home({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const data = await getPosts(locale);
	console.log(data);
	return (
		<>
			<HeroSection />
			<Partners />
			{/* <DeparturesSection /> */}
			<Graduate />
			{/* <InformationSection /> */}
			<SubmitDocuments />
		</>
	);
}
