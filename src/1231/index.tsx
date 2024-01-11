import DeparturesSection from "@/Layouts/DeparturesSection";
import Footer from "@/Layouts/Footer";
import Graduate from "@/Layouts/Graduate";
import Header from "@/Layouts/Header";
import HeroSection from "@/Layouts/HeroSection";
import InformationSection from "@/Layouts/InformationSection";
import MapLocation from "@/Layouts/MapLocation";
import Partners from "@/Layouts/Partners";
import SubmitDocuments from "@/Layouts/SubmitDocuments";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Berdaq atindagi Qaraqalpaq mamleketlik universiteti</title>
        <meta name="description" content="Karakalpak State University" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <>
        <Header />
        <main>
          <HeroSection />
          <Partners />
          <DeparturesSection />
          <Graduate />
          <InformationSection />
          <SubmitDocuments />
          <MapLocation />
        </main>
        <Footer />
      </>
    </>
  );
}
