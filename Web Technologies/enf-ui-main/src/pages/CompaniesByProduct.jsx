import NavBar from "../components/NavBar/NavBar"
import CompaniesList from '../components/CompaniesList/CompaniesList'
import CrystallinePanels from '../components/CrystallinePanels/CrystallinePanels';
import PanelDeals from '../components/PanelDeals/PanelDeals'
import headerImage from '../assets/images/headerImgAll.png';

const CompaniesByProducts = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Panel Manufacturer'} sub_head={'Company Directory / Solar Panels / Polycrystalline'} />
      <CrystallinePanels />
      <CompaniesList/>
      <PanelDeals />
    </div>
  )
}

export default CompaniesByProducts
