import './SeeMoreButton.css';
import { rightArrow } from '../../assets/images/SVGs';


const SeeMoreButton = ({buttonColor = '#FFFFFF'}) => {

    return (
        <button className="see-more-button" style={{borderColor: buttonColor, color: buttonColor}}>
            <span className="see-more-button-text">See More</span>
            <span className="see-more-button-icon">
            { rightArrow }
            </span>
        </button>
    )
}

export default SeeMoreButton;