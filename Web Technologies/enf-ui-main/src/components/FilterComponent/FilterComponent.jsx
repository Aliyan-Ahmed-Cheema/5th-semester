import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

export default function FilterComponent() {
  const [openSections, setOpenSections] = useState({});

  const filterData = [
    {
      title: 'Type',
      options: [
        { label: 'Monocrystalline', count: 5444 },
        { label: 'Polycrystalline', count: 2268 },
        { label: 'Bifacial', count: 5444 },
        { label: 'PERC', count: 2268 },
        { label: 'TOPCon', count: 5444 },
        { label: 'HJT', count: 2268 },
        { label: 'IBC', count: 5444 },
        { label: 'Thin Film', count: 2268 },
      ],
    },
    {
      title: 'Continent',
      options: [
        { label: 'Asia', count: 5444 },
        { label: 'Europe', count: 2268 },
        { label: 'North America', count: 5444 },
        { label: 'South America', count: 2268 },
      ],
    },
    {
      title: 'Product Warranty',
      options: [
        { label: '10 Years', count: 5444 },
        { label: '15 Years', count: 2268 },
        { label: '20 Years', count: 5444 },
        { label: '25 Years', count: 2268 },
      ],
    },
    // Additional filter sections can be added here
  ];

  const relatedDirectories = [
    'Solar Inverters',
    'Mounting Systems',
    'Charge Controllers',
    'Storage Systems',
  ];

  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Ensure animations run only once when scrolled into view
    });
  }, []);

  return (
    <div className="w-72 bg-white shadow-lg rounded-lg p-4" data-aos="fade-up">
      {/* Filter Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Filter</h2>

      {filterData.map((section, index) => (
        <div key={index} className="border-b py-2" data-aos="fade-up" data-aos-delay={index * 100}>
          <button
            className="flex justify-between items-center w-full text-gray-900 font-medium text-left"
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span>{openSections[index] ? '-' : '+'}</span>
          </button>
          {openSections[index] && (
            <ul className="mt-2 space-y-1" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              {section.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className="text-gray-700 flex justify-between"
                >
                  <span>{option.label}</span>
                  <span className="text-gray-500">({option.count})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-4 border-t pt-4" data-aos="fade-up" data-aos-delay={(filterData.length + 1) * 100}>
        <h3 className="text-gray-900 font-medium">Related Directories</h3>
        <ul className="mt-2 space-y-2">
          {relatedDirectories.map((item, index) => (
            <li key={index} className="text-green-700 hover:underline">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
