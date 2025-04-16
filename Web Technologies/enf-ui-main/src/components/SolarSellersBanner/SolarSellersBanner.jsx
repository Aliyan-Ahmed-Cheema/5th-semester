import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../../assets/images/monocrystallineAndSolarImg.png';

const SolarSellersBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Ensure animations run only once when scrolled into view
    });
  }, []);

  return (
    <div 
      className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto"
      data-aos="fade-up" // Add AOS animation attribute here
    >
      <div className="w-full md:w-1/2 p-4 text-center md:text-left" data-aos="fade-right">
        <h4 className="text-green-500 font-semibold uppercase text-2xl md:text-3xl">Solar Sellers</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mt-2">Sellers</h2>
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          A database of distributors and wholesalers for solar photovoltaic kits, panels, inverters, mounting systems, and other balance of system components. Sellers are listed as distributors only if they have a special agreement with the manufacturer. Please select your region to get a list of local solar suppliers.
        </p>
      </div>
      <div 
        className="w-full md:w-1/2 mt-6 md:mt-0 h-1/2 md:h-auto" 
        data-aos="fade-left" // Add AOS animation attribute here
        data-aos-delay="200" // Optional: delay animation
      >
        <img
          src={image}
          alt="Solar panels"
          className="w-full h-full md:h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SolarSellersBanner;
