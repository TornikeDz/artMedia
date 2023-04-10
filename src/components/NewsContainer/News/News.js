import './News.css';
import CoverOvarlay from '../../CoverOverlay/CoverOverlay';
import SeeMoreButton from '../../SeeMoreButton/SeeMoreButton';

const News = ({ newsData }) => {
    const { heading, date, image } = newsData;

    return(
        <div className="news" >
            <img className="news-image" src={require(`../../../assets/images/${image}.png`)} alt={heading}/>
            <div className="news-description">
                <h2 className="news-description-heading">{heading}</h2>
                <div className="news-description-date">{date}</div>
                <div className="news-description-button"><SeeMoreButton/></div>
            </div>
            <CoverOvarlay/>
        </div>
    )
}

export default News;