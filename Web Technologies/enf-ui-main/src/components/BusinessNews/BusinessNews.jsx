import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTag, FaCalendarAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../assets/images/businessNewsImg1.png";
import img2 from "../../assets/images/businessNewsImg2.png";
import img3 from "../../assets/images/businessNewsImg3.png";

const newsData = [
  {
    country: "Canada",
    title: "Exploring the Latest Innovations in Solar Technology",
    date: "Feb 2024",
    category: "Solar Panel",
    imageUrl: img1,
  },
  {
    country: "China",
    title: "Exploring the Latest Innovations in Solar Technology",
    date: "Feb 2024",
    category: "Solar Panel",
    imageUrl: img2,
  },
  {
    country: "China",
    title: "Exploring the Latest Innovations in Solar Technology",
    date: "Feb 2024",
    category: "Solar Panel",
    imageUrl: img3,
  },
];

function BusinessNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === newsData.length - 1 ? 0 : prevIndex + 1));
  };

  // Define number of visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      return 3; // Monitor screens
    } else if (window.innerWidth >= 768) {
      return 2; // Tablets
    } else {
      return 1; // Mobile screens
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="bg-white py-12 px-6" data-aos="fade-up">
      <div className="text-center mb-8">
        <h3 className="text-green-600 font-semibold text-lg">SOLAR PV</h3>
        <h2 className="text-4xl font-bold text-gray-900">Business News</h2>
      </div>

      {/* Container holding buttons and cards */}
      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-green-600" />
        </button>

        {/* News Cards */}
        <div className="overflow-hidden w-full sm:w-2/3 lg:w-3/4">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6 lg:gap-8"
            style={{ transform: `translateX(-${(currentIndex % (newsData.length / visibleCards)) * (100 / visibleCards)}%)` }}
          >
            {newsData.map((news, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full ${visibleCards === 1 ? "sm:w-full" : visibleCards === 2 ? "sm:w-1/2" : "lg:w-1/3"}`}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={`News ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-green-600 mb-2">{news.country}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{news.title}</h3>
                    <div className="flex items-center text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FaTag className="mr-2" />
                        <span>{news.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-green-600" />
        </button>
      </div>
    </div>
  );
}

export default BusinessNews;
