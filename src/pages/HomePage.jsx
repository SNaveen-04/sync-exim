import Hero from "../components/Home/HeroSection/Hero";
import Exporter from "../components/Home/Exporter/Exporter";
import Works from "../components/Home/HowWeWorks/Works";
import Service from "../components/Home/ServiceSection/Service";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Exporter />
      <Works />
      <Service />
    </>
  );
};

export default HomePage;
