import React, { useEffect } from 'react';
import { FaUserCircle, FaInfoCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyStaff = ({ staff, businessDetailsPanels, businessDetailsInstaller }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-4 space-y-4 bg-white shadow-md rounded-lg" data-aos="fade-up">
      <div className="text-lg font-bold">Staff Information</div>
      <div className="space-y-2">
        {staff.map((member, index) => (
          <div
            key={index}
            className="flex items-center space-x-2"
            data-aos="fade-right"
            data-aos-delay={`${index * 100}`} // Staggered delay for each staff member
          >
            <FaUserCircle className="text-2xl" />
            <div className="flex-1">
              <div className="font-medium">{member.name}</div>
              <div className="text-sm text-gray-600">{member.position}</div>
            </div>
            <FaInfoCircle className="text-gray-400" />
          </div>
        ))}
      </div>

      <div className="text-lg font-bold">Business Details - Panels</div>
      <div className="space-y-2 text-base leading-relaxed" data-aos="fade-up">
        <div className="font-medium text-lg">Crystalline</div>
        <div className="text-lg">
          <div className="flex flex-wrap">
            <div className="font-medium text-md mr-1">Types:</div>
            {businessDetailsPanels.types.map((type, index) => (
              <React.Fragment key={index}>
                <a href={`/product/${type}`} className="text-blue-500">{type}</a>
                {index < businessDetailsPanels.types.length - 1 && ', '}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-wrap">
            <div className="font-medium text-md mr-1">Power Range (Wp):</div>
            {businessDetailsPanels.powerRange}
          </div>
        </div>
      </div>

      <div className="text-lg font-bold">Business Details - Installer</div>
      <div className="text-lg leading-relaxed" data-aos="fade-up">
        <div className="font-medium text-lg">Installation sizes:</div>
        <div className="flex flex-wrap">
          {businessDetailsInstaller.sizes.map((size, index) => (
            <React.Fragment key={index}>
              <a href={`/installation/${size}`} className="text-blue-500">{size}</a>
              {index < businessDetailsInstaller.sizes.length - 1 && ', '}
            </React.Fragment>
          ))}
        </div>
        <div className="font-medium text-lg mt-2">Area:</div>
        <a href={`/area/${businessDetailsInstaller.area}`} className="text-blue-500">{businessDetailsInstaller.area}</a>
        <div className="font-medium text-lg mt-2">Suppliers:</div>
        <a href={businessDetailsInstaller.suppliersLink} className="text-blue-500">{businessDetailsInstaller.suppliers}</a>
        <div className="font-medium text-lg mt-2">Last Update:</div>
        {businessDetailsInstaller.lastUpdate}
      </div>
    </div>
  );
};

export default CompanyStaff;
