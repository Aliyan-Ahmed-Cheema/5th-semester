import NavBar from "../components/NavBar/NavBar"
import ProductInfoTable from "../components/ProductInfoTable/ProductInfoTable";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SolarDirectoryProductCard from "../components/SolarDirectoryProductCard/SolarDirectoryProductCard";
import headerImage from '../assets/images/headerImgAll.png';

const Product = () => {
  const product = {
    description: "This solar panel is designed with advanced monocrystalline technology, offering superior efficiency and performance in a compact form. Ideal for both residential and commercial applications, it provides reliable energy generation even in low-light conditions.",
    companyProfile: "Zhejiang Era Solar Technology is a leading manufacturer of high-efficiency solar panels. With years of experience in the industry, we are committed to delivering innovative solar solutions that meet the highest quality standards.",
    models: [
      { name: 'Eagle-66HC', isHighlighted: false, specs: ['650 Wp', '650 Wp', '650 Wp', '650 Wp', '650 Wp', '650 Wp', '650 Wp'] },
      { name: '650Eagle-66HC', isHighlighted: false, specs: ['655 Wp', '655 Wp', '655 Wp', '655 Wp', '655 Wp', '655 Wp', '655 Wp'] },
      { name: '655Eagle-66HC', isHighlighted: true, specs: ['660 Wp', '660 Wp', '660 Wp', '660 Wp', '660 Wp', '660 Wp', '660 Wp'] },
      { name: '660Eagle-66HC 665', isHighlighted: false, specs: ['665 Wp', '665 Wp', '665 Wp', '665 Wp', '665 Wp', '665 Wp', '665 Wp'] },
      { name: 'Eagle-66HC 670', isHighlighted: false, specs: ['670 Wp', '670 Wp', '670 Wp', '670 Wp', '670 Wp', '670 Wp', '670 Wp'] },
    ],
    warranty: '12 Years',
    specs: [
      { name: 'Maximum Power (Pmax)' },
      { name: 'Voltage at Maximum Power (Vmpp)' },
      { name: 'Current at Maximum Power (Impp)' },
      { name: 'Open Circuit Voltage (Voc)' },
      { name: 'Short Circuit Current (Isc)' },
      { name: 'Panel Efficiency' },
      { name: 'Power Tolerance (Positive)' },
    ],
  };
  

const products = [
{
  title: "PNGNH54-B8 415-440W Full Black",
  company: "PNG SOLAR",
  type: "TOPCon",
  powerRange: "415 ~ 440 Wp",
  region: "China",
  panelEfficiency: "21.25 ~ 22.53 %",
  weight: "21.7 ± 0.3 kg",
  dimensions: "1722x1134x30 mm",
  price: "$0.131 / WP",
},
];

const productGridItems = [
{
  name: "SW 250-270M",
  type: "Monocrystalline",
  powerRange: "250 ~ 270 Wp",
  imageUrl: "https://via.placeholder.com/150",
},
];

return (
<div>
  <NavBar
    bgImage={headerImage}
    main_head={"Solar Panel Manufacturer"}
    sub_head={"Product Directory / Solar Panels"}
  />

  <section className="bg-white shadow-md rounded-lg p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <SolarDirectoryProductCard key={index} product={product} />
      ))}
    </div>
  </section>

  <div className="p-6 space-y-12">
    <section className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
      <ProductInfoTable product={product} />
    </section>

    <section className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">More Products</h2>
      <ProductGrid products={productGridItems} />
    </section>
  </div>
</div>
);

}

export default Product
