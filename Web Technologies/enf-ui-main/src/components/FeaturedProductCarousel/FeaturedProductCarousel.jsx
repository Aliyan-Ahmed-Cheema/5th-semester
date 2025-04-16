import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";
import AOS from "aos";  // Import AOS for animations

function FeaturedProductCarousel({ products, productsToShow, currentIndex, handlePrevClick, handleNextClick }) {

  // Re-initialize AOS after rendering product cards
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration for each product
      easing: 'ease-in-out',
      once: true,  // Only animate once when scrolled into view
    });
  }, [currentIndex]);  // Trigger animation when the currentIndex changes

  return (
    <div className="relative p-4 lg:p-8">
      {/* Previous Button */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={handlePrevClick}
          className="bg-white border border-gray-300 p-2 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-green-600" />
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={handleNextClick}
          className="bg-white border border-gray-300 p-2 rounded-full shadow-md"
        >
          <FaChevronRight className="text-green-600" />
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {products
          .slice(currentIndex, currentIndex + productsToShow)
          .map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"    // Apply fade-up animation to each product card
              data-aos-delay={`${index * 200}`}  // Add delay for each card for staggered effect
            >
              <ProductCard
                image={product.image}
                name={product.name}
                category={product.category}
                manufacturer={product.manufacturer}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default FeaturedProductCarousel;
