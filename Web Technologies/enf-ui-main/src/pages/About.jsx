import NavBar from "../components/NavBar/NavBar"
import AboutUs from '../components/AboutUs/AboutUs'; 
import WorkProcess from '../components/WorkProcess/WorkProcess';
import Testimonials from '../components/Testimonials/Testimonials';
import SolarSolutions from "../components/SolarSolutions/SolarSolutions";
import headerImage from '../assets/images/headerImgAll.png';

const About = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'About Us'} sub_head={'About Us / Home'} />
      <AboutUs/>
      <SolarSolutions/>
      <WorkProcess/>
      <Testimonials/>
    </div>
  )
}

export default About
