import React from "react";
import banner from '../../assets/images/homePageImg.png';
function Banner() {
  return (
    <div 
      className="z-0 w-full h-2/3 flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }} // Corrected the template literal syntax
    >
      <div className="text-left text-white lg:pl-36 lg:pt-28 lg:pb-24 md:pl-36 md:pt-28 md:pb-24 pl-12 pt-20 pb-20">
        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-green-500">Welcome to ILLUSION</p>
        <p className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2">Powering The Future</p>
        <p className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-green-500">With Illusion Solar</p>
        <p className="text-sm md:text-base lg:text-lg max-w-xl mb-6">
          With over 19 years in the solar industry, we're the premier source
          connecting suppliers and customers. Our site, used by over 5,000,000
          users annually, offers unmatched scale, data quality, and industry
          insights.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-black py-4 px-6 rounded-full hover:bg-green-600">Shop Now</button>
          <button className="border border-green-500 text-green-500 py-4 px-6 rounded-full hover:bg-green-500 hover:text-white">About Us</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
