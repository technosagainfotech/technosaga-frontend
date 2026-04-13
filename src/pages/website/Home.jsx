import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import WhyUs from "../../components/WhyUs";
import Clients from "../../components/Clients";
import Stats from "../../components/Stats";
import Certificate from "../../components/Certificate";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import Faq from "../../components/Faq";
import Contact from "../../components/Contact";
import WhatsAppButton from "../../components/WhatsAppButton";
import { useState } from "react";
import { PopupModal } from "../../components/Model";
import { Helmet } from "react-helmet-async";
import { structuredData } from "../../libs/static";

export default function Home() {
  const [isModal, setIsModal] = useState(true);

  return (
    <>
      <Helmet>
        {/* ── Primary ── */}
        <title>
          Technosaga Infotech | Web, App & Digital Marketing Company in Ranchi
        </title>
        <meta
          name="description"
          content="Technosaga Infotech is a leading IT company in Ranchi offering web design, app development, digital marketing, BPO services, graphic design, event management & more."
        />
        <meta
          name="keywords"
          content="IT company Ranchi, web design Ranchi, app development Ranchi, digital marketing Ranchi, BPO services, graphic design, event management Jharkhand, Technosaga Infotech"
        />
        <meta name="author" content="Technosaga Infotech" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://technosagainfotech.in/" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <WhatsAppButton />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Clients />
      <Stats />
      <Certificate />
      <Experience />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
