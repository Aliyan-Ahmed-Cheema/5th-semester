import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDirectory from "../ProductDirectory/ProductDirectory";

function DirectorySection({ selectedTab, items, currentIndex, directoryToShow }) {
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation duration
      easing: "ease-in-out",  // Smooth easing
      once: true,  // Only animate once
    });
  }, []);

  return (
    <div 
      className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-12 py-4 md:py-6 lg:py-8"
    >
      {items
        .slice(currentIndex, currentIndex + directoryToShow)
        .map((item, index) => (
          <div 
            key={index} 
            data-aos="fade-up"    // Apply AOS fade-up animation to each item
            data-aos-delay={`${index * 100}`}  // Stagger animation for each item by 100ms
          >
            <ProductDirectory image={item.image} name={item.name} />
          </div>
        ))}
    </div>
  );
}

export default DirectorySection;
