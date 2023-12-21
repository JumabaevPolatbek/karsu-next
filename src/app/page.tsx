import Header from '../Layouts/Header';
import HeroSection from '../Layouts/HeroSection';
import DeparturesSection from '../Layouts/DeparturesSection';
import Partners from '../Layouts/Partners';
import Graduate from '../Layouts/Graduate';
import InformationSection from '../Layouts/InformationSection';
import SubmitDocuments from '../Layouts/SubmitDocuments';
import MapLocation from '../Layouts/MapLocation';
import Footer from '../Layouts/Footer';

function Page() {
    return (
        <>
            <Header />
            <HeroSection />
            <Partners />
            <DeparturesSection />
            <Graduate />
            <InformationSection />
            <SubmitDocuments />
            <MapLocation />
            <Footer />
        </>
    );
}

export default Page;
