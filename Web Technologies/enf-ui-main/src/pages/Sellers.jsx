import NavBar from "../components/NavBar/NavBar"
import SolarSellersBanner from "../components/SolarSellersBanner/SolarSellersBanner";
import Countries from "../components/Countries/Countries";
import headerImage from '../assets/images/headerImgAll.png';

const Sellers = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Seller'} sub_head={'Company Directory / Seller'} />
      <SolarSellersBanner/>
      <Countries/>
    </div>
  )
}

export default Sellers
