import { Link } from 'react-router-dom';

// Reusable component
const LocalDistributors = ({ category, title, description, imgSrc, link, secondaryButton }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden p-8 md:px-20 md:py-12 mb-8">
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <p className="text-[#89EA5F] text-xs md:text-sm lg:text-base font-semibold mb-2">{category}</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-xs md:text-sm lg:text-base mb-4">{description}</p>
        <Link to={link}>
          <button className="bg-[#89EA5F] text-black py-2 px-16 rounded-full hover:bg-lime-500 transition duration-300">
            View All
          </button>
        </Link>
        {secondaryButton && (
          <Link to={secondaryButton.link}>
            <button className="bg-white border border-black text-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition duration-300 ml-4">
              {secondaryButton.text}
            </button>
          </Link>
        )}
      </div>
      <div className="w-full md:w-1/2">
        <img src={imgSrc} alt={title} className="w-full h-auto object-cover rounded-r-lg md:rounded-none" />
      </div>
    </div>
  );
};

export default LocalDistributors;
