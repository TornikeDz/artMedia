import './Main.css';
import { mainData } from '../../assets/data';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton';
import CoverOverlay from '../CoverOverlay/CoverOverlay';

const Main = () => {
    return (
        <div className="main">
            <CoverOverlay/>
            <div className="main-container">
                <h1 className="main-container-heading">{mainData.heading}</h1>
                <p className="main-container-paragraph">{mainData.paragraph}</p>
                <SeeMoreButton/>
            </div>
            {/* <div className="borderer">
            </div> */}
        </div>
    )
}

export default Main;
