import { Carousel } from "flowbite-react";

import Image1 from "../../../assets/hero/SlideImg1.jpg";
import Image2 from "../../../assets/hero/SlideImg2.png";
import Image3 from "../../../assets/hero/SlideImg3.jpg";
import Image4 from "../../../assets/hero/SlideImg4.jpg";
import Image5 from "../../../assets/hero/SlideImg5.jpg";

const Hero = () => {
  const slides = [
    // {
    //   image: Image1,
    //   title: "Welcome To Sync Exim",
    //   subtitle: "Connecting Global Markets Seamlessly",
    // },
    // {
    //   image: Image2,
    //   title: "Comprehensive Import & Export Solutions",
    //   subtitle:
    //     "International Sourcing & Procurement Customs Clearance & Documentation Freight Forwarding & Logistics Product Distribution & Wholesale",
    // },
    // {
    //   image: Image3,
    //   title: "Diverse Industry Experience",
    //   subtitle: "Connecting Industries to Global Markets",
    // },
    {
      image: Image1,
      title: "Global quality products exporter from india",
      subtitle: "Delivering excellence beyond borders",
    },
    {
      image: Image2,
      title: "Trusted & Legally Approved Certified products",
      subtitle: "Certified for trust, approved for you",
    },
    {
      image: Image3,
      title: "We export our finest",
      subtitle: "Export Excellence",
    },
    {
      image: Image4,
      title: "Bridging Businesses Beyond Borders",
      subtitle:
        "We empower businesses to expand internationally by offering smooth, hassle-free export services",
    },
    {
      image: Image5,
      title: "Committed to Excellence in Global Trade",
      subtitle:
        "Our mission is to drive success and foster lasting partnerships worldwide.",
    },
  ];

  return (
    <div className="w-full sm:w-[calc(100%-20px)] sm:mx-2.5 sm:my-2.5 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[88vh] box-border relative sm:rounded-lg sm:border sm:border-black">
      <Carousel
        rightControl=" "
        leftControl=" "
        slideInterval={3500}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
            className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
          >
            <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
              <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 max-w-full sm:max-w-3xl">
                  {slide.title}
                </h1>
                <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold max-w-full sm:max-w-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
