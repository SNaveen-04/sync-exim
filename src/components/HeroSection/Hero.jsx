import "./Hero.css"
import { Carousel } from "flowbite-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assests/SlideImg1.png"
import Image2 from "../../assests/SlideImg2.png"
import Image3 from "../../assests/SlideImg2.png"
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div id="heroSection">
      <Carousel rightControl=" " leftControl=" ">
        <div style={{backgroundImage:`url(${Image1})`}} className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default">
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <p className="text-left flex items-center px-5 md:px-10 md:my-2 text-white text-xl font-semibold max-md:text-sm">
              <span className="inline-flex p-0 border-2 m-1 rounded-[100%] border-white">
                <span className="h-[10px] w-[10px] bg-white inline-block m-1 rounded-[100%]"></span>
              </span>
              Certified Authentic
            </p>
            <h1 className="px-5 md:px-10 md:my-2 text-white text-2xl font-semibold max-md:text-sm">
              Global quality products exporter from india 
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">&quot;Delivering excellence beyond borders&quot;</p>
            <div className="px-5 md:px-10 py-2">
              <a className="inline-flex items-center text-sm md:font-bold p-[15px] bg-[#4AB9CF] text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e] max-md:p-[5px] max-md:m-[5px] ">Service we provide<FaArrowRight/></a>            
              <a className="inline-flex items-center text-sm md:font-bold p-[15px] border border-white hover:border-[#2c526e] text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e] max-md:p-[5px] max-md:m-[5px] ">Learn More<FaArrowRight/></a>            
            </div>
          </div>
        </div>
        <div style={{backgroundImage:`url(${Image2})`}} className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default">
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <p className="text-left flex items-center px-5 md:px-10 md:my-2 text-white text-xl font-semibold max-md:text-sm">
              <span className="inline-flex p-0 border-2 m-1 rounded-[100%] border-white">
                <span className="h-[10px] w-[10px] bg-white inline-block m-1 rounded-[100%]"></span>
              </span>
              Certified Authentic
            </p>
            <h1 className="px-5 md:px-10 md:my-2 text-white text-2xl font-semibold max-md:text-sm">
              Trusted & Legally Approved Certified products 
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">&quot;Certified for trust,approved for you&quot;</p>
            <div className="px-5 md:px-10 py-2">
              <a className="inline-flex items-center text-sm md:font-bold p-[15px] bg-[#4AB9CF] text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e] max-md:p-[5px] max-md:m-[5px] ">Service we provide<FaArrowRight/></a>            
              <a className="inline-flex items-center text-sm md:font-bold p-[15px] border border-white hover:border-[#2c526e] text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e] max-md:p-[5px] max-md:m-[5px] ">Learn More<FaArrowRight/></a>            
            </div>
          </div>
        </div><div style={{backgroundImage:`url(${Image3})`}} className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default">
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-55">
            <p className="text-left flex items-center px-5 md:px-10 md:my-2 text-white text-xl font-semibold max-md:text-sm">
              <span className="inline-flex p-0 border-2 m-1 rounded-[100%] border-white">
                <span className="h-[10px] w-[10px] bg-white inline-block m-1 rounded-[100%]"></span>
              </span>
              Certified Authentic
            </p>
            <h1 className="px-5 md:px-10 md:my-2 text-white text-2xl font-semibold max-md:text-sm">
            We export our finest
            </h1>
            <p className="text-left px-5 md:px-10 md:my-2 max-md:text-sm text-white text-xl font-semibold">&quot;Export Excellence&quot;</p>
            <div className="px-5 md:px-10 py-2">
              <a className="inline-flex items-center text-sm md:font-bold p-[15px] bg-[#4AB9CF] text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e] max-md:p-[5px] max-md:m-[5px] ">Service we provide<FaArrowRight/></a>            
              <a className="inline-flex items-center text-sm md:font-bold p-[15px] border border-white hover:border-[#2c526e] text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e] max-md:p-[5px] max-md:m-[5px] ">Learn More<FaArrowRight/></a>            
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Hero