import NavBar from "../components/NavBar/NavBar"
import ShopCart from '../components/ShopCart/ShopCart';
import headerImage from '../assets/images/headerImgAll.png';

const Cart = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'My Cart'} sub_head={'My Cart / Home'} />
      <ShopCart/>
    </div>
  )
}

export default Cart
