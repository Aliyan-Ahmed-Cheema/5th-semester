import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img from "../../assets/images/localDistributorsImg.png";
import { Link } from 'react-router-dom';

const PanelDeals = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Ensures animation happens only once when scrolling
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden p-8 md:px-20 md:py-12 " data-aos="fade-up">
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0" data-aos="fade-right">
        <p className="text-[#89EA5F] text-xs md:text-sm lg:text-base font-semibold mb-2">SOLAR PANELS</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Solar Panel Deals</h2>
        <p className="text-gray-700 text-xs md:text-sm lg:text-base mb-4">
          Get the latest pricing for solar panels, solar inverters, charge controllers, storage systems and mounting systems. Check online or download PDFs for more information.
        </p>
        <div className="flex space-x-4">
          <Link to="/">
            <button className="bg-[#89EA5F] text-black py-2 px-10 rounded-full hover:bg-lime-500 transition duration-300">
              View All
            </button>
          </Link>
          <Link to="/">
            <button className="bg-white text-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition duration-300">
              Download PDF
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <img src={Img} alt="Solar Panels" className="w-full h-auto object-cover rounded-r-lg md:rounded-none" />
      </div>
    </div>
  );
};

export default PanelDeals;
