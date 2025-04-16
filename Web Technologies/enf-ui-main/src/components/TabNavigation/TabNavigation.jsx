import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TabNavigation({ selectedTab, setSelectedTab }) {
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,  // Animation duration in milliseconds
      easing: "ease-in-out",  // Smooth easing
      once: true,  // Only animate once when scrolled into view
    });
  }, []);

  // Scroll up by 0.5 cm when changing the tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    window.scrollBy({ top: -0.02 * 37.7953, behavior: 'smooth' });  // Scroll up by 0.5 cm (37.7953 pixels)
  };

  return (
    <div 
      className="flex items-center justify-between border-b-2 border-gray-200 py-2 md:py-4 px-4 md:px-6"
      data-aos="fade-up"  // AOS animation for the whole tab navigation
    >
      <div className="flex space-x-4 md:space-x-8">
        <p
          className={`text-lg md:text-xl lg:text-2xl font-medium cursor-pointer transition-colors duration-300 ${
            selectedTab === "Product"
              ? "text-green-700 border-b-4 border-green-700"
              : "text-gray-400 hover:text-gray-600"
          }`}
          onClick={() => handleTabClick("Product")}
          data-aos="fade-right"  // AOS animation for Product tab
        >
          Product Directory
        </p>
        <p
          className={`text-lg md:text-xl lg:text-2xl font-medium cursor-pointer transition-colors duration-300 ${
            selectedTab === "Company"
              ? "text-green-700 border-b-4 border-green-700"
              : "text-gray-400 hover:text-gray-600"
          }`}
          onClick={() => handleTabClick("Company")}
          data-aos="fade-left"  // AOS animation for Company tab
        >
          Company Directory
        </p>
      </div>
    </div>
  );
}

export default TabNavigation;
