import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Img from "../../assets/images/localDistributorsImg.png";
import { Link } from 'react-router-dom';

const SolarPanelCard = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Ensure animations run only once when scrolled into view
    });
  }, []);

  return (
    <div 
      className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden p-8 md:px-20 md:py-12" 
      data-aos="fade-up"
    >
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <p className="text-[#89EA5F] text-xs md:text-sm lg:text-base font-semibold mb-2">SOLAR PANELS</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Local Distributors</h2>
        <p className="text-gray-700 text-xs md:text-sm lg:text-base mb-4">
          A database of solar panel manufacturers, including crystalline and thin-film panels. Please select the technology type that you are interested in. For local distributors/wholesalers.
        </p>
        <Link to="/">
          <button className="bg-[#89EA5F] text-black py-2 px-16 rounded-full hover:bg-lime-500 transition duration-300">
            View All
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2" data-aos="zoom-in">
        <img src={Img} alt="Solar Panels" className="w-full h-auto object-cover rounded-r-lg md:rounded-none" />
      </div>
    </div>
  );
};

export default SolarPanelCard;
