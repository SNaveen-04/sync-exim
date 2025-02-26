import "./Hero.css";
import { Carousel } from "flowbite-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../../assests/SlideImg1.png";
import Image2 from "../../../assests/SlideImg2.png";
import Image3 from "../../../assests/SlideImg2.png";

const Hero = () => {
  return (
    <div id="heroSection">
      <Carousel rightControl=" " leftControl=" " slideInterval={3500}>
        <div
          style={{ backgroundImage: `url(${Image1})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <h1 className="px-5 md:px-10 md:my-2 text-white text-5xl font-semibold max-md:text-sm w-2/3">
              Global quality products exporter from india
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">
              Delivering excellence beyond borders
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Image2})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <h1 className="px-5 md:px-10 md:my-2 text-white text-5xl font-semibold max-md:text-sm w-2/3">
              Trusted & Legally Approved Certified products
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">
              Certified for trust,approved for you
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Image3})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <h1 className="px-5 md:px-10 md:my-2 text-white text-5xl font-semibold max-md:text-sm w-2/3">
              We export our finest
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">
              Export Excellence
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Image3})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <h1 className="px-5 md:px-10 md:my-2 text-white text-5xl font-semibold max-md:text-sm w-2/3">
              Bridging Businesses Beyond Borders
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">
              We empower businesses to expand internationally by offering
              smooth, hassle-free export services
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Image3})` }}
          className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default"
        >
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <h1 className="px-5 md:px-10 md:my-2 text-white text-5xl font-semibold max-md:text-sm w-2/3">
              Committed to Excellence in Global Trade
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">
              Our mission is to drive success and foster lasting partnerships
              worldwide.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
