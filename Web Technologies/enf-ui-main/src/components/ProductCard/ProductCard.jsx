
const ProductCard = ({ image, name, category, manufacturer }) => {
  return (
    <div className="relative mx-auto w-3/5 bg-white rounded-xl shadow-md overflow-hidden">
      <img className="w-full h-4/5 object-cover" src={image} alt={name} />
      <div className="p-4">
        <div className="text-xs font-semibold text-green-500 mb-1">{category}</div>
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-blue-400">{manufacturer}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"> {/* Hover effect container */}
        <div className="text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full m-2">More Info</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full m-2">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;