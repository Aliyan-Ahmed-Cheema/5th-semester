import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import solarImage1 from '../../assets/images/aboutUsLargeImg.png';  
import solarImage2 from '../../assets/images/aboutUsSmallImg.png';  

function AboutUs() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12 space-y-8 md:space-y-0">
      <div className="md:w-1/2 space-y-6" data-aos="fade-right">
        <h3 className="text-green-600 font-semibold text-xl">ABOUT US</h3>
        <h2 className="text-5xl font-bold text-gray-900">About ENF</h2>
        <p className="text-gray-600 text-lg w-10/12">
          We are the top source of photovoltaic information connecting solar suppliers and customers. 
          With more than 19 years of experience researching the solar industry, our strong focus on data quality 
          offers unparalleled depth. Our site provides scale, features, and quality that connects more than 5,000,000 
          users each year.
        </p>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur. Elementum interdum massa est sem egestas. 
          Condimentum faucibus in leo actincidunt.lementum interdum massa es.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-600 text-lg">
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Battery Storage Solutions</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Solar Inverter Setup</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>24 X 7 Call & Chat Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Solar Material Financing</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Customer-Centric Approach</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>Proven Track Record</span>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center" data-aos="fade-left">
        <div className="relative">
          <img
            src={solarImage1}
            alt="Solar Panels"
            className="w-full rounded-3xl shadow-md"
          />
          <img
            src={solarImage2}
            alt="Solar House"
            className="absolute -bottom-8 -right-24  w-2/3 h-1/2 rounded-3xl border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
