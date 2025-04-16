import NavBar from "../components/NavBar/NavBar"
import FilterComponent from "../components/FilterComponent/FilterComponent";
import DirectoryProductCard from "../components/DirectoryProductCard/DirectoryProductCard";
import headerImage from '../assets/images/headerImgAll.png';

const ProductDirectory = () => {
  const products = [ 
    // Your array of product data
    {
      title: 'PNGNH54-B8 415-440W Full Black',
      company: 'PNG SOLAR',
      type: 'TOPCon',
      powerRange: '415 ~ 440 Wp',
      region: 'China',
      panelEfficiency: '21.25 ~ 22.53 %',
      weight: '21.7 ± 0.3 kg',
      dimensions: '1722x1134x30 mm',
      price: '$0.131 / WP',
    },

    {
      title: 'PNGNH54-B8 415-440W Full Black',
      company: 'PNG SOLAR',
      type: 'TOPCon',
      powerRange: '415 ~ 440 Wp',
      region: 'China',
      panelEfficiency: '21.25 ~ 22.53 %',
      weight: '21.7 ± 0.3 kg',
      dimensions: '1722x1134x30 mm',
      price: '$0.131 / WP',
    },

    {
      title: 'PNGNH54-B8 415-440W Full Black',
      company: 'PNG SOLAR',
      type: 'TOPCon',
      powerRange: '415 ~ 440 Wp',
      region: 'China',
      panelEfficiency: '21.25 ~ 22.53 %',
      weight: '21.7 ± 0.3 kg',
      dimensions: '1722x1134x30 mm',
      price: '$0.131 / WP',
    },
    
    // Add more products here
  ];
  
  return (
    <div>
      <NavBar 
        bgImage={headerImage}  
        main_head={'Solar Panel Manufacturer'} 
        sub_head={'Product Directory / Solar Panels'} 
      />
      
      <div className="lg:flex px-4 md:px-6 lg:px-12 py-4 md:py-6 lg:py-8">
        <div className="flex-shrink-0">
          <FilterComponent />
        </div>
        <div className="flex-grow ml-4 space-y-4">
        <h2 className="text-6xl font-bold text-green-600 mb-4 sm:mt-4 md:mt-0" data-aos="fade-up">
        Products
      </h2>
          {products.map((product, index) => (
            <DirectoryProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDirectory
