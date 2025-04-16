import { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaLink, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import Img from '../../assets/images/companyDescriptionImg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyCard = () => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Simulating a fetch call to a backend
    const fetchData = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name: "Horay Solar Co., Ltd",
            description: "Horay Solar participates in InterSolar Europe 2024! Visit us from June 19-21 at booths A1.130K and A3.510. Discover our latest TOPCon PV modules and the debut of our energy storage systems.",
            address: "No. 30-5 Yanxin East Road, Huishan, Wuxi, Jiangsu",
            phone: "+86 510 83580688",
            email: "sales@horaysolar.com",
            website: "https://www.horaysolar.com",
            country: "China"
          });
        }, 1000);
      });
      setCompanyData(data);
    };

    fetchData();
  }, []);

  if (!companyData) {
    return <div>Loading...</div>;
  }

  return (
    <div 
      className="container mx-auto mt-5 p-4 md:p-6 bg-gray-100 rounded-lg flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4"
      data-aos="fade-up"
    >
      <div 
        className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4"
        data-aos="zoom-in"
      >
        <div className="p-4 bg-white rounded-lg shadow-md">
          <img src={Img} alt="Company Logo" className="w-full md:w-60 h-24 object-contain" />
        </div>
        <div className="w-full lg:w-[28rem] xl:w-[35rem]">
          <h2 className="text-xl md:text-2xl font-bold">{companyData.name}</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">{companyData.description}</p>
        </div>
      </div>
      <div 
        className="p-4 bg-white rounded-lg shadow-md w-full lg:w-[22rem] xl:w-[30rem]"
        data-aos="fade-right"
      >
        <h3 className="text-lg font-bold mb-2">Contact Info</h3>
        <p className="text-sm md:text-base text-gray-600">
          <span className="block"><FaMapMarkerAlt className="inline mr-2" /> {companyData.address}</span>
          <span className="block mt-2"><FaPhone className="inline mr-2" /> {companyData.phone}</span>
          <span className="block mt-2"><FaEnvelope className="inline mr-2" /> <a href={`mailto:${companyData.email}`} className="text-blue-500">{companyData.email}</a></span>
          <span className="block mt-2"><FaLink className="inline mr-2" /> <a href={companyData.website} className="text-blue-500">{companyData.website}</a></span>
          <span className="block mt-2"><FaGlobe className="inline mr-2" /> {companyData.country}</span>
        </p>
        <button className="mt-4 w-full bg-green-500 text-black py-2 px-4 rounded-md" data-aos="fade-up">Get a Quote</button>
      </div>
    </div>
  );
};

export default CompanyCard;
