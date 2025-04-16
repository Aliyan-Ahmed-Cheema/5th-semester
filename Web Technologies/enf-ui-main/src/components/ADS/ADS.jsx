import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import logo from "../../assets/images/companyLogo.png";
import flag from "../../assets/images/countryFlag.png";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ADS = ({ ads }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Ensure animations run only once when scrolled into view
    });
  }, []);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const fakeData = [
    {
      name: "Xiamen Angels Solar Energy Co., Ltd",
      technology: "Monocrystalline, Bifacial",
      location: "China",
      address: "No. 30-5 Yanxin East Road, Huishan, Wuxi, Jiangsu",
      phone: "+86 510 83580688",
      email: "sales@horaysolar.com",
      website: "http://www.horaysolar.com",
      flag: flag,
      logo: logo,
    },
    {
      name: "Better Technology Group Limited",
      technology: "Monocrystalline, Bifacial",
      location: "China",
      address: "No. 30-5 Yanxin East Road, Huishan, Wuxi, Jiangsu",
      phone: "+86 510 83580688",
      email: "sales@horaysolar.com",
      website: "http://www.horaysolar.com",
      flag: flag,
      logo: logo,
    },
    {
      name: "Solar N Plus New Energy Tech. Co., Ltd",
      technology: "Monocrystalline, Bifacial",
      location: "China",
      address: "No. 30-5 Yanxin East Road, Huishan, Wuxi, Jiangsu",
      phone: "+86 510 83580688",
      email: "sales@horaysolar.com",
      website: "http://www.horaysolar.com",
      flag: flag,
      logo: logo,
    },
    {
      name: "Karstsolar Technology (Shenzhen) Co., Ltd",
      technology: "Monocrystalline, Bifacial",
      location: "China",
      address: "No. 30-5 Yanxin East Road, Huishan, Wuxi, Jiangsu",
      phone: "+86 510 83580688",
      email: "sales@horaysolar.com",
      website: "http://www.horaysolar.com",
      flag: flag,
      logo: logo,
    },
  ];

  const dataToDisplay = ads && ads.length > 0 ? ads : fakeData;

  return (
    <div className="bg-gray-100 px-20 py-4" data-aos="fade-up">
      <div className="bg-[#ff5757] text-white p-4 rounded-t-md flex" data-aos="zoom-in">
        <h2 className="text-lg font-semibold w-28">Ads</h2>
        <div className="flex-1 text-lg font-semibold text-left">Company Name</div>
        <div className="flex-1 text-lg font-semibold text-left">Panel Technology</div>
        <div className="w-24 text-lg font-semibold">Region</div>
      </div>
      <div className="bg-white p-4 shadow-md" data-aos="fade-up" data-aos-delay="200">
        {dataToDisplay.map((ad, index) => (
          <div key={index} className="mb-4 border-b border-gray-300 pb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="w-24 h-24 bg-gray-200 rounded-md mr-4 flex items-center justify-center" data-aos="zoom-in">
                <img
                  src={ad.logo}
                  alt={ad.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{ad.name}</h3>
              </div>
              <div className="flex-1 text-sm text-gray-500">{ad.technology}</div>
              <div className="w-24 text-sm text-gray-500">
                <img
                  src={ad.flag}
                  alt={ad.location}
                  className="w-16 h-8 object-contain"
                />
              </div>
              <button className="text-gray-500 focus:outline-none">
                {expandedIndex === index ? "▲" : "▼"}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="mt-4 ml-28" data-aos="fade-down">
                {ad.address && (
                  <p className="text-sm flex items-center mt-2"><FaMapMarkerAlt className="mr-2"/>{ad.address}</p>
                )}
                {ad.phone && (
                  <p className="text-sm flex items-center mt-2"><FaPhone className="mr-2"/>{ad.phone}</p>
                )}
                {ad.email && (
                  <p className="text-sm flex items-center mt-2"><FaEnvelope className="mr-2"/>
                    <a href={`mailto:${ad.email}`} className="text-blue-500">
                      {ad.email}
                    </a>
                  </p>
                )}
                {ad.website && (
                  <p className="text-sm flex items-center mt-2"><IoIosLink className="mr-2"/>
                    <a href={ad.website} className="text-blue-500">
                      {ad.website}
                    </a>
                  </p>
                )}
                {ad.location && (
                  <p className="text-sm flex items-center mt-2"><FaGlobe className="mr-2"/>{ad.location}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ADS;
