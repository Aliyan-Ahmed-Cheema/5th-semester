import NavBar from "../components/NavBar/NavBar"
import ContactForm from "../components/ContactUs/ContactUs";
import headerImage from '../assets/images/headerImgAll.png';

const Contact_Us = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Contact Us'} sub_head={'Contact Us / Home'} />
      <ContactForm/>
    </div>
  )
}

export default Contact_Us
