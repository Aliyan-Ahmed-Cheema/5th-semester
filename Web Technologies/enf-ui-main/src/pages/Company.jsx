import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar/NavBar";
import CompanyCard from '../components/CompanyCard/CompanyCard';
import CompanyProducts from '../components/CompanyProducts/CompanyProducts';
import CompanyStaff from '../components/CompanyStaff/CompanyStaff';
import Img1 from '../assets/images/companyDescriptionImg1.png';
import Img2 from '../assets/images/companyDescriptionImg2.png';
import Img3 from '../assets/images/companyDescriptionImg3.png';
import Img4 from '../assets/images/companyDescriptionImg4.png';
import Img5 from '../assets/images/companyDescriptionImg5.png';
import Img6 from '../assets/images/companyDescriptionImg6.png';
import headerImage from '../assets/images/headerImgAll.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Company = () => {
  const panelsData = [
    { id: 1, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img1 },
    { id: 2, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img2 },
    { id: 3, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img3 },
    { id: 4, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img4 },
    { id: 5, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img5 },
    { id: 6, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img6 },
    { id: 7, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img1 },
    { id: 8, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img2 },
  ];

  const componentsData = [
    { id: 1, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img1 },
    { id: 2, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img2 },
  ];

  const sellersData = [
    { id: 1, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img1 },
    { id: 2, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img2 },
    { id: 3, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img3 },
    { id: 4, title: 'SW-250~270M', power: '250 ~ 270 Wp', type: 'Monocrystalline', imageUrl: Img4 },
  ];

  const staffData = [
    { name: 'Coco', position: 'Sales Manager' },
    { name: 'Alex Lai', position: 'Sales Manager' },
    { name: 'Jo Guo', position: 'Sales Manager' },
  ];

  const businessDetailsPanelsData = {
    types: ['Monocrystalline', 'Polycrystalline', 'Flexible'],
    powerRange: '240-370',
  };

  const businessDetailsInstallerData = {
    sizes: ['Smaller Installations', '1MWp+ Installations'],
    area: 'China',
    suppliers: 'Guangdong Fivestar Solar Energy Co., Ltd.',
    suppliersLink: '#', // Replace with actual link
    lastUpdate: '28 May 2024',
  };

  const [activeTab, setActiveTab] = useState('Panels');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getActiveTabData = () => {
    switch (activeTab) {
      case 'Panels':
        return panelsData;
      case 'Components':
        return componentsData;
      case 'Sellers':
        return sellersData;
      default:
        return panelsData;
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <NavBar bgImage={headerImage} main_head={'Solar Panel Manufacturer'} sub_head={'Company Directory / Solar Panels / Polycrystalline / Horay Solar'} />
      
      {/* Company Card Section with AOS */}
      <div data-aos="fade-up">
        <CompanyCard />
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            {/* Tab buttons with AOS */}
            <div className="flex space-x-4 mb-4" data-aos="fade-right">
              <button className={`py-2 px-4 ${activeTab === 'Panels' ? 'bg-white text-black font-bold underline underline-offset-8' : 'bg-gray-200 text-gray-700'}`} onClick={() => setActiveTab('Panels')}>Panels</button>
              <button className={`py-2 px-4 ${activeTab === 'Components' ? 'bg-white text-black font-bold underline underline-offset-8': 'bg-gray-200 text-gray-700'}`} onClick={() => setActiveTab('Components')}>Components</button>
              <button className={`py-2 px-4 ${activeTab === 'Sellers' ? 'bg-white text-black font-bold underline underline-offset-8' : 'bg-gray-200 text-gray-700'}`} onClick={() => setActiveTab('Sellers')}>Sellers</button>
            </div>
            
            {/* Product List Section with AOS */}
            <div data-aos="fade-up">
              <CompanyProducts
                products={getActiveTabData()}
                activeTab={activeTab}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>

          {/* Staff Info Section with AOS */}
          <div className="w-full lg:w-1/3" data-aos="fade-left">
            <CompanyStaff
              staff={staffData}
              businessDetailsPanels={businessDetailsPanelsData}
              businessDetailsInstaller={businessDetailsInstallerData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
