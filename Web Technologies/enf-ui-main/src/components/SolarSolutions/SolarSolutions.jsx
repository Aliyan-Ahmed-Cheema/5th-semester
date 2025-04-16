import React, { useEffect } from 'react';
import { FaHeadset, FaThumbsUp, FaShieldAlt, FaSolarPanel } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

function SolarSolutions() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-8" data-aos="fade-up">
        <h3 className="text-green-600 font-semibold text-lg">WHY CHOOSE US</h3>
        <h2 className="text-4xl font-bold text-gray-900">Providing Solar Solutions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center" data-aos="fade-up" data-aos-delay="100">
          <FaHeadset className="text-green-400 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900">24*7 Support</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Cursus lacinia fusce.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center" data-aos="fade-up" data-aos-delay="200">
          <FaThumbsUp className="text-green-400 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900">High Quality Work</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Cursus lacinia fusce.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center" data-aos="fade-up" data-aos-delay="300">
          <FaShieldAlt className="text-green-400 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900">Trust & Warranty</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Cursus lacinia fusce.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center" data-aos="fade-up" data-aos-delay="400">
          <FaSolarPanel className="text-green-400 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900">Efficiency & Power</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Cursus lacinia fusce.</p>
        </div>
      </div>
    </div>
  );
}

export default SolarSolutions;
