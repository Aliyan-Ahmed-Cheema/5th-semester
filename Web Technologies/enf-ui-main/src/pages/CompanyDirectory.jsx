import NavBar from "../components/NavBar/NavBar"
import Locals from '../components/Locals/Locals'
import CrystallinePanels from '../components/CrystallinePanels/CrystallinePanels'
import EfficiencyPanels from '../components/EfficiencyPanels/EfficiencyPanels'
import PanelDeals from '../components/PanelDeals/PanelDeals'
import ADS from '../components/ADS/ADS'
import headerImage from '../assets/images/headerImgAll.png';

const CompanyDirectory = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Panel Manufacturer'} sub_head={'Company Directory / Solar Panels'} />
      <Locals/>
      <CrystallinePanels/>
      <ADS/>
      <EfficiencyPanels/>
      <PanelDeals/>
    </div>
  )
}

export default CompanyDirectory
