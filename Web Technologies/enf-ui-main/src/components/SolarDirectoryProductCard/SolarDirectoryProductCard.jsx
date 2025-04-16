import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const SolarDirectoryProductCard = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.img1);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration for animation
    });
  }, []);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <>
      <div
        className="border p-4 rounded-md shadow-md max-w-md bg-white"
        data-aos="fade-up"
      >
        <h3 className="text-green-600 font-semibold uppercase">
          {product.company}
        </h3>

        <h2 className="text-xl font-bold mt-1">{product.title}</h2>

        <div className="text-sm mt-2">
          <div className="flex justify-between">
            <span className="font-semibold">Type</span>
            <span className="text-blue-500">{product.type}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-semibold">Power Range</span>
            <span className="text-blue-500">{product.powerRange}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-semibold">Region</span>
            <span className="text-blue-500 lowercase">{product.region}</span>
          </div>
        </div>

        <div className="mt-4">
          <span className="font-semibold">Price</span>
          <span className="text-green-600 text-lg font-bold block">
            From {product.price} / WP
          </span>
        </div>

        <div className="mt-4 flex space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Get Quote
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Note: Your enquiry will be sent directly to {product.company}.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="my-4 w-full max-w-md" data-aos="fade-in">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="flex space-x-2 w-full justify-center" data-aos="zoom-in">
          <img
            src={product.img1}
            alt="img1"
            className="w-1/3 h-auto rounded-md object-cover cursor-pointer"
            onClick={() => handleImageClick(product.img1)}
          />
          <img
            src={product.img2}
            alt="img2"
            className="w-1/3 h-auto rounded-md object-cover cursor-pointer"
            onClick={() => handleImageClick(product.img2)}
          />
          <img
            src={product.img3}
            alt="img3"
            className="w-1/3 h-auto rounded-md object-cover cursor-pointer"
            onClick={() => handleImageClick(product.img3)}
          />
        </div>
      </div>
    </>
  );
};

export default SolarDirectoryProductCard;
