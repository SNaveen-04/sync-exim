/* eslint-disable react/prop-types */
import "./Hero.css"
import { Carousel } from "flowbite-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assests/SlideImg1.png"
import Image2 from "../../assests/SlideImg2.png"
import Image3 from "../../assests/SlideImg2.png"

const Hero = () => {
  return (
    <div id="heroSection">
      <Carousel>
        <div style={{backgroundImage:`url(${Image1})`}} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center bg-scroll">
          <div className="h-full w-full bg-black bg-opacity-30">
            Slide 1
          </div>
        </div>
        <div style={{backgroundImage:`url(${Image2})`}} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-no-repeat bg-cover bg-center bg-scroll">
          <div className="h-full w-full bg-black bg-opacity-30">
            Slide 1
          </div>
        </div>
        <div style={{backgroundImage:`url(${Image3})`}} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-no-repeat bg-cover bg-center bg-scroll">
          <div className="h-full w-full bg-black bg-opacity-30">
            Slide 1
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Hero