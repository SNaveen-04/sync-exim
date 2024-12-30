import "./Hero.css"
import { Carousel } from "flowbite-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assests/SlideImg1.png"
// import Image2 from "../../assests/SlideImg2.png"
// import Image3 from "../../assests/SlideImg2.png"
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div id="heroSection">
      <Carousel>
        <div style={{backgroundImage:`url(${Image1})`}} className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll cursor-default">
          <div className="h-full w-full flex flex-col justify-center bg-black bg-opacity-30">
            <p className="text-left flex items-center px-10 my-2 text-white text-xl font-semibold">
              <span className="inline-flex p-0 border-2 m-1 rounded-[100%] border-white">
                <span className="h-[10px] w-[10px] bg-white inline-block m-1 rounded-[100%]"></span>
              </span>
              Certified Authentic
            </p>
            <h1></h1>
            <p className="text-left px-10 my-2 text-white text-xl font-semibold">&quot;Export Excellence&quot;</p>
            <div className="p-10">
              <a className="inline-flex items-center tracking-wide font-bold p-[20px] bg-[#4AB9CF] text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e]">Service we provide<FaArrowRight/></a>            
              <a className="inline-flex items-center tracking-wide font-bold p-[20px] border border-white text-white m-[10px] gap-[2px] cursor-pointer hover:bg-[#2c526e] hover:border-[#2c526e]">Learn More<FaArrowRight/></a>            
            </div>
          </div>
        </div>
        {/* <div style={{backgroundImage:`url(${Image2})`}} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-no-repeat bg-cover bg-center bg-scroll">
          <div className="h-full w-full bg-black bg-opacity-30">
            Slide 1
          </div>
        </div>
        <div style={{backgroundImage:`url(${Image3})`}} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-no-repeat bg-cover bg-center bg-scroll">
          <div className="h-full w-full bg-black bg-opacity-30">
            Slide 1
          </div>
        </div> */}
      </Carousel>
    </div>
  )
}

export default Hero