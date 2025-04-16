import NavBar from "../components/NavBar/NavBar"
import SoftwareCompanies from '../components/SoftwareCompanies/SoftwareCompanies'
import headerImage from '../assets/images/headerImgAll.png';

const Softwares = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Software Company'} sub_head={'Company Directory / Software'} />
      <SoftwareCompanies/>
    </div>
  )
}

export default Softwares
