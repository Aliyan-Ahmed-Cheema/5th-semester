import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample data with continent field for each flag
const flags = [
  { id: 1, country: 'Albania', continent: 'Europe', imgSrc: 'path_to_flag_image' },
  { id: 2, country: 'Azerbaijan', continent: 'Asia', imgSrc: 'path_to_flag_image' },
  { id: 3, country: 'Andorra', continent: 'Europe', imgSrc: 'path_to_flag_image' },
  { id: 4, country: 'Belarus', continent: 'Europe', imgSrc: 'path_to_flag_image' },
  { id: 5, country: 'Armenia', continent: 'Asia', imgSrc: 'path_to_flag_image' },
  { id: 6, country: 'Austria', continent: 'Europe', imgSrc: 'path_to_flag_image' },
  { id: 7, country: 'Brazil', continent: 'Americas', imgSrc: 'path_to_flag_image' },
  { id: 8, country: 'Canada', continent: 'Americas', imgSrc: 'path_to_flag_image' },
  // Add more countries and flags here
];

const ArrowButton = ({ direction = 'right', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-200 focus:outline-none"
      data-aos="fade"
    >
      <span className={`text-green-900 text-lg ${direction === 'left' ? 'rotate-180' : ''}`}>
        &gt;
      </span>
    </button>
  );
};

const Countries = () => {
  const [selectedTab, setSelectedTab] = useState('Europe');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Filter the flags based on the selected tab
  const filteredFlags = flags.filter((flag) => flag.continent === selectedTab);

  const handleNext = () => {
    const increment = window.innerWidth >= 1024 ? 12 : 6;
    if (currentIndex < filteredFlags.length - increment) {
      setCurrentIndex(currentIndex + increment);
    }
  };

  const handlePrev = () => {
    const decrement = window.innerWidth >= 1024 ? 12 : 6;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - decrement);
    }
  };

  // Scroll up by 0.5 cm when changing the tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setCurrentIndex(0); // Reset index when switching tab
    window.scrollBy({ top: -0.01 * 37.7953, behavior: 'smooth' }); // Scroll up by 0.5 cm (37.7953 pixels)
  };

  return (
    <div className="max-w-full mx-auto py-4 px-4 md:py-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-lg md:text-2xl">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button
            className={`px-2 py-1 md:px-4 md:py-2 ${selectedTab === 'Europe' ? 'text-green-950 border-b-2 border-green-600' : 'text-gray-500'} focus:outline-none`}
            onClick={() => handleTabClick('Europe')}
            data-aos="fade-down"
          >
            Europe
          </button>
          <button
            className={`px-2 py-1 md:px-4 md:py-2 ${selectedTab === 'Asia' ? 'text-green-950 border-b-2 border-green-600' : 'text-gray-500'} focus:outline-none`}
            onClick={() => handleTabClick('Asia')}
            data-aos="fade-down"
          >
            Asia
          </button>
          <button
            className={`px-2 py-1 md:px-4 md:py-2 ${selectedTab === 'Americas' ? 'text-green-950 border-b-2 border-green-600' : 'text-gray-500'} focus:outline-none`}
            onClick={() => handleTabClick('Americas')}
            data-aos="fade-down"
          >
            Americas
          </button>
        </div>
        <input
          type="text"
          placeholder="Search here"
          className="px-2 py-1 md:px-4 md:py-2 border rounded-full focus:outline-none text-sm md:text-base"
          data-aos="fade-left"
        />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between">
          <ArrowButton direction="left" onClick={handlePrev} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredFlags.slice(currentIndex, currentIndex + 12).map((flag) => (
              <div key={flag.id} className="text-center" data-aos="fade-up">
                <img
                  src={flag.imgSrc}
                  alt={`${flag.country} flag`}
                  className="w-16 h-12 md:w-20 md:h-14 mx-auto"
                />
                <p className="mt-2 text-gray-700 text-sm md:text-base">{flag.country}</p>
              </div>
            ))}
          </div>
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Countries;
