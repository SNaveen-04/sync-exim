import Hero from "../components/Home/HeroSection/Hero";
import Exporter from "../components/Home/Exporter/Exporter";
import Works from "../components/Home/HowWeWorks/Works";
import Service from "../components/Home/ServiceSection/Service";
import ContactForm from "../components/Contact/ContactForm";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Exporter />
      <br />
      <br />
      <br />
      <br />
      <Works />
      <Service />

      <div className="flex justify-center py-10">
        <ContactForm withBorder={true} />
      </div>
    </>
  );
};

export default HomePage;
