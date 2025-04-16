
const ProductDirectory = ({ image, name }) => {
  return (
    <div className="relative mx-auto w-4/5 bg-white rounded-xl shadow-md overflow-hidden">
      <img className="w-full h-2/3 object-cover" src={image} alt={name} />
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      </div>

    </div>
  );
};

export default ProductDirectory;