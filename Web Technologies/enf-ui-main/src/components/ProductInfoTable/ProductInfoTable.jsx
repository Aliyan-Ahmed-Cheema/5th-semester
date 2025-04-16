import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductInfoTable = ({ product }) => {
  const [activeTab, setActiveTab] = useState('ProductInfo');

  useEffect(() => {
    AOS.init({
      duration: 800, // Adjust the duration for animation
    });
  }, []);

  return (
    <div className="p-4">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300 mb-4" data-aos="fade-right">
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === 'Description' ? 'text-black border-b-2 border-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Description')}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === 'ProductInfo' ? 'text-black border-b-2 border-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('ProductInfo')}
        >
          Product Info
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === 'CompanyProfile' ? 'text-black border-b-2 border-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('CompanyProfile')}
        >
          Company Profile
        </button>
      </div>

      {/* Description Tab */}
      {activeTab === 'Description' && (
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold">Product Description</h3>
          <p className="mt-2 text-gray-600">
            {product.description}
          </p>
        </div>
      )}

      {/* Product Info Tab */}
      {activeTab === 'ProductInfo' && (
        <div className="overflow-x-auto" data-aos="fade-up">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300 bg-gray-50"></th>
                {product.models.map((model, index) => (
                  <th
                    key={index}
                    className={`p-2 border border-gray-300 text-center ${
                      model.isHighlighted ? 'bg-green-100' : ''
                    }`}
                  >
                    {model.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300 bg-green-900 text-white font-semibold">Warranty</td>
                {product.models.map((model, index) => (
                  <td
                    key={index}
                    className={`p-2 border border-gray-300 text-center ${
                      model.isHighlighted ? 'bg-green-100' : ''
                    }`}
                  >
                    {index === 2 ? product.warranty : ''}
                  </td>
                ))}
              </tr>
              <tr>
                <td colSpan={product.models.length + 1} className="bg-green-900 text-white text-center p-2 font-semibold">
                  Electrical Data at STC
                </td>
              </tr>
              {product.specs.map((spec, specIndex) => (
                <tr key={specIndex}>
                  <td className="p-2 border border-gray-300 bg-gray-50 font-semibold">{spec.name}</td>
                  {product.models.map((model, index) => (
                    <td
                      key={index}
                      className={`p-2 border border-gray-300 text-center ${
                        model.isHighlighted ? 'bg-green-100' : ''
                      }`}
                    >
                      {model.specs[specIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Company Profile Tab */}
      {activeTab === 'CompanyProfile' && (
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold">Company Profile</h3>
          <p className="mt-2 text-gray-600">
            {product.companyProfile}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductInfoTable;
