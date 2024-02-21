// import Partners from '../Components/Layouts/Partners';
// import HeroSection from '../Components/Layouts/HeroSection';
// import DeparturesSection from '../Components/Layouts/DeparturesSection';
// import Graduate from '../Components/Layouts/Graduate';
// import InformationSection from '../Components/Layouts/InformationSection';
// import SubmitDocuments from '../Components/Layouts/SubmitDocuments';

export default function Home({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	console.log(locale);
	return (
		<>
			{/* <HeroSection />
			<Partners />
			<DeparturesSection />
			<Graduate />
			<InformationSection />
			<SubmitDocuments /> */}
			<p>Salam</p>
		</>
	);
}
