"use client"
import Partners from '../Components/Layouts/Partners';
import HeroSection from '../Components/Layouts/HeroSection';
import DeparturesSection from '../Components/Layouts/DeparturesSection';
import Graduate from '../Components/Layouts/Graduate';
import InformationSection from '../Components/Layouts/InformationSection';
import SubmitDocuments from '../Components/Layouts/SubmitDocuments';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router =useRouter()

	console.log(router)
	return (
		<>
			{/* <HeroSection />
			<Partners />
			<DeparturesSection />
			<Graduate />
			<InformationSection />
			<SubmitDocuments /> */}
			<p>Hello </p>
		</>
	);
}
