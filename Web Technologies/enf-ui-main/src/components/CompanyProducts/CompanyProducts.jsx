import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyProducts = ({ products, currentPage, itemsPerPage, handlePageChange }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentProducts.map((product, index) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 text-center"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Delay each product a bit for a staggered effect
          >
            <img src={product.imageUrl} alt={product.title} className="w-36 h-48 object-cover mb-4" />
            <div>
              <h3 className="text-lg font-semibold text-left">{product.title}</h3>
              <div className="flex">
                <a href='#' className='pr-2 text-blue-400 font-semibold'>{product.power}</a>
                <p>{product.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            data-aos="fade-up"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompanyProducts;
