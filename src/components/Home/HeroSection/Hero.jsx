import "./Hero.css";

import { Carousel } from "flowbite-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image1 from "../../../assets/others/SlideImg1.png";
import Image2 from "../../../assets/others/SlideImg2.png";
import Image3 from "../../../assets/others/SlideImg2.png";

const Hero = () => {
  return (
    <div id="heroSection">
      <Carousel rightControl=" " leftControl=" " slideInterval={3500}>
        <div
          style={{ backgroundImage: `url(${Image1})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <div className="w-[70rem]">
              <h1 className="px-5 md:px-10 md:my-2 text-white text-8xl font-bold max-md:text-sm w-2/3">
                Welcome To Sync Exim
              </h1>
              <p className="!mt-3 text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-3xl font-extrabold">
                Connecting Global Markets Seamlessly
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${Image2})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <div className="w-[80rem]">
              <h1 className="px-5 md:px-10 md:my-2 text-white text-8xl font-bold max-md:text-sm w-2/3">
                Comprehensive Import & Export Solutions
              </h1>
              <p className="w-[28.5rem] !mt-3 text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-extrabold">
                International Sourcing & Procurement Customs Clearance &
                Documentation Freight Forwarding & Logistics Product
                Distribution & Wholesale
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${Image3})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <div className="w-[80rem]">
              <h1 className="px-5 md:px-10 md:my-2 text-white text-8xl font-bold max-md:text-sm w-2/3">
                Diverse Industry Experience
              </h1>
              <p className="!mt-3 text-left px-5 md:px-11 md:my-2 max-md:text-sm text-white text-2xl font-extrabold">
                Connecting Industries to Global Markets
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
