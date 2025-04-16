
const SolarPricing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 rounded-xl p-24 right-0 ">
      <div className="text-center md:text-left md:max-w-[60%] mb-8 md:mb-0 ">
        <h5 className="text-green-500 font-bold text-2xl mb-2">SOLARS</h5>
        <h1 className="text-green-900 font-bold text-4xl mb-4 w-1/2">
          Learn about the latest pricing of solars
        </h1>
        <p className="text-gray-600 text-xl mb-6 w-1/2 ">
          Get the latest pricing for solar panels, solar inverters, charge
          controllers, storage systems, and mounting systems. Check online or
          download PDFs for more information.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-green-500 text-white rounded-full px-6 py-2">
            View All
          </button>
          <button className="bg-white text-gray-600 border border-gray-300 rounded-full px-6 py-2">
            Download PDF
          </button>
        </div>
      </div>
      <img
        src="path_to_your_image.png"
        alt="Solar panels"
        className="w-full md:w-[35%] rounded-xl"
      />
    </div>
  );
};

export default SolarPricing;
