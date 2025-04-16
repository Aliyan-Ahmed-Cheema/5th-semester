import { useState, useEffect } from "react";
import AOS from "aos";  // Import AOS
import "aos/dist/aos.css";  // Import the AOS CSS

import NavHome from "../components/NavHome/NavHome";
import FeaturedProductCarousel from "../components/FeaturedProductCarousel/FeaturedProductCarousel";
import TabNavigation from "../components/TabNavigation/TabNavigation";
import DirectorySection from "../components/DirectorySection/DirectorySection";
import BusinessNews from "../components/BusinessNews/BusinessNews";
import dummyImage from "../assets/images/featuredHomeImg2.png";
import PanelDeals from '../components/PanelDeals/PanelDeals';
import headerImage from '../assets/images/headerImgAll.png';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsToShow, setProductsToShow] = useState(1);
  const [directoryToShow, setDirectoryToShow] = useState(2);
  const [selectedTab, setSelectedTab] = useState("Product");

  const products = [
    {
      image: dummyImage,
      name: "Inverter Panel",
      category: "Solar panel",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "Special Solar",
      category: "Solar panel",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "Component Solar",
      category: "Solar panel",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "Panel Low",
      category: "Solar panel",
      manufacturer: "Shinefar Sola",
    },
    {
      image: dummyImage,
      name: "Panel High",
      category: "Solar panel",
      manufacturer: "Shinefar Sola",
    },

  ];

  const companies = products; // Reuse the products array for companies

  const updateProductsToShow = () => {
    if (window.innerWidth < 640) {
      setProductsToShow(1);
    } else if (window.innerWidth < 1024) {
      setProductsToShow(2);
    } else {
      setProductsToShow(3);
    }
  };

  const updateDirectoryToShow = () => {
    if (window.innerWidth < 640) {
      setDirectoryToShow(2);
    } else if (window.innerWidth < 1024) {
      setDirectoryToShow(4);
    } else {
      setDirectoryToShow(6);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,  // Increased duration for smoother appearance
      easing: 'ease-in-out',  // Easing for smoother animations
      once: true,  // Only animate once
      offset: 120,  // Delay animation until component is 120px into view
    });

    updateProductsToShow();
    updateDirectoryToShow();
    window.addEventListener("resize", updateProductsToShow);
    window.addEventListener("resize", updateDirectoryToShow);
    return () => {
      window.removeEventListener("resize", updateProductsToShow);
      window.removeEventListener("resize", updateDirectoryToShow);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - productsToShow
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - productsToShow ? prevIndex + 1 : 0
    );
  };

  return (
    <div> {/* Prevent horizontal scroll */}
      <NavHome bgImage={headerImage} />

      {/* Featured Product Section */}
      <div
        className="text-left text-white lg:pl-36 lg:pt-28 md:pl-24 md:pt-20 pl-8 pt-12 "
        data-aos="fade-up" // AOS attribute for fade-up animation
      >
        <div className="flex items-center justify-between">
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-green-500">
            RECENT ARTICLES
          </p>
          <button className="bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600 ml-auto lg:mr-36 md:mr-24 mr-8">
            View All
          </button>
        </div>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-green-900">
          Featured Product
        </p>
      </div>

      <FeaturedProductCarousel
        products={products}
        productsToShow={productsToShow}
        currentIndex={currentIndex}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />

      {/* Tab Navigation */}
      <TabNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

      {/* Directory Section */}
      <DirectorySection
        selectedTab={selectedTab}
        items={selectedTab === "Product" ? products : companies}
        currentIndex={currentIndex}
        directoryToShow={directoryToShow}
       
      />

      <BusinessNews />
      <PanelDeals />
    </div>
  );
}

export default Home;
