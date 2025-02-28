import { Carousel } from "flowbite-react";

import Image1 from "../../../assets/others/SlideImg1.png";
import Image2 from "../../../assets/others/SlideImg2.png";
import Image3 from "../../../assets/others/SlideImg2.png";

const Hero = () => {
  const slides = [
    {
      image: Image1,
      title: "Welcome To Sync Exim",
      subtitle: "Connecting Global Markets Seamlessly",
    },
    {
      image: Image2,
      title: "Comprehensive Import & Export Solutions",
      subtitle:
        "International Sourcing & Procurement Customs Clearance & Documentation Freight Forwarding & Logistics Product Distribution & Wholesale",
    },
    {
      image: Image3,
      title: "Diverse Industry Experience",
      subtitle: "Connecting Industries to Global Markets",
    },
  ];

  return (
    <div className="w-full sm:w-[calc(100%-20px)] sm:mx-2.5 sm:my-2.5 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] box-border relative sm:rounded-lg sm:border sm:border-black">
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
