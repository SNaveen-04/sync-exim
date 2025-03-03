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
    text: "Rice",
    img: Image1,
  },
  {
    text: "Edible Oils",
    img: Image2,
  },
  {
    text: "Moringa Powder/Tablets",
    img: Image3,
  },
  {
    text: "Cattle Feed",
    img: Image4,
  },
  {
    text: "Tomato Ketchup",
    img: Image5,
  },
  {
    text: "Coconut Shell Charcoal",
    img: Image6,
  },
  {
    text: "India Spices",
    img: Image7,
  },
];

const BusinessVerticalsPage = () => {
  return (
    <div className="container mx-auto p-4 py-10">
      <h2 className="uppercase text-[#273296] py-5 text-4xl text-center !font-bold">
        Our Business Verticals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {verticals.map((vertical, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative overflow-hidden group">
              <img
                src={vertical.img}
                alt={vertical.text}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-xl text-[#2c526e] mb-2 text-center">
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
