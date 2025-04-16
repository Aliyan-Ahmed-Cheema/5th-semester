import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import Img1 from "../../assets/images/crystallinePanelsImg1.png";
import Img2 from "../../assets/images/crystallinePanelsImg2.png";
import Img3 from "../../assets/images/crystallinePanelsImg3.png";
import Img4 from "../../assets/images/crystallinePanelsImg4.png";

const EfficiencyPanels = ({ panels }) => {
  const fakeData = [
    { name: 'Monocrystalline', available: 1485, image: Img1 },
    { name: 'Polycrystalline', available: 1485, image: Img2 },
    { name: 'Flexible', available: 1485, image: Img3 },
    { name: 'Monocrystalline', available: 1485, image: Img4 },
    { name: 'Flexible', available: 1485, image: Img3 },
    { name: 'Monocrystalline', available: 1485, image: Img4 }
  ];

  const dataToDisplay = panels && panels.length > 0 ? panels : fakeData;

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Ensure animations run only once when scrolled into view
    });
  }, []);

  return (
    <div className="px-[5rem] py-6">
      <div className="text-left" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-green-600">SOLAR PANELS</h2>
        <h3 className="text-3xl font-bold mt-1">High Efficiency Panels</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {dataToDisplay.map((panel, index) => (
          <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <div className="w-full h-64 bg-gray-200 mb-4 flex items-center justify-center">
              <img src={panel.image} alt={panel.name} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex justify-between">
              <h4 className="font-semibold">{panel.name}</h4>
              <span className="px-2 py-1 text-white rounded-full" style={{ backgroundColor: '#89EA5F' }}>
                {panel.available}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EfficiencyPanels;
