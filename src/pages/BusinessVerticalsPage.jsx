import { useState, useEffect } from "react";

import Image1 from "../assets/product_images/Image1.jpg";
import Image2 from "../assets/product_images/Image2.jpg";
import Image3 from "../assets/product_images/Image3.jpg";
import Image4 from "../assets/product_images/Image4.jpg";
import Image5 from "../assets/product_images/Image5.jpg";
import Image6 from "../assets/product_images/Image6.jpg";
import Image7 from "../assets/product_images/Image7.jpg";

const verticals = [
  {
    text: "Edible Oils",
    img: Image1,
  },
  {
    text: "Image 2",
    img: Image2,
  },
  {
    text: "Image 3",
    img: Image3,
  },
  {
    text: "Image 4",
    img: Image4,
  },
  {
    text: "Image 5",
    img: Image5,
  },
  {
    text: "Image 6",
    img: Image6,
  },
  {
    text: "Image 7",
    img: Image7,
  },
];

const BusinessVerticalsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-[#2c526e] mb-8">
        Our Business <span className="text-[#4AB9CF]">Verticals</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {verticals.map((vertical, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative overflow-hidden group">
              <img
                src={vertical.img}
                alt={vertical.text}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg text-[#2c526e] mb-2">
                {vertical.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessVerticalsPage;
