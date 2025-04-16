import React, { useEffect } from 'react';
import { FaPencilAlt, FaSearch, FaSolarPanel } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

function WorkProcess() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-8" data-aos="fade-up">
        <h3 className="text-green-600 font-semibold text-lg">OUR LATEST PROCESS</h3>
        <h2 className="text-4xl font-bold text-gray-900">Our Work Process</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">

        <div className="relative text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-center items-center bg-green-400 p-6 rounded-xl text-white mx-auto">
            <FaPencilAlt className="text-5xl mb-4" />
          </div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full px-3 py-1">
            01
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6">Project Planning</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the</p>
        </div>

        <div className="relative text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="flex justify-center items-center bg-green-400 p-6 rounded-xl text-white mx-auto">
            <FaSearch className="text-5xl mb-4" />
          </div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full px-3 py-1">
            02
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6">Research & Analysis</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the</p>
        </div>

        <div className="relative text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="flex justify-center items-center bg-green-400 p-6 rounded-xl text-white mx-auto">
            <FaSolarPanel className="text-5xl mb-4" />
          </div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full px-3 py-1">
            03
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6">Solar Installation</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the</p>
        </div>

      </div>
    </div>
  );
}

export default WorkProcess;
