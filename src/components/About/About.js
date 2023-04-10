import './About.css';
import { companyInfo } from '../../assets/data';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton';

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <img className="about-container-image" src={require('../../assets/images/about-background.png')} alt="about company"/>
                <article className="about-container-article">
                    <h1 className="about-container-article-heading">{companyInfo.heading}</h1>
                    <p className="about-container-article-paragraph">{companyInfo.paragraph}</p>
                    <SeeMoreButton buttonColor="#EF5555"/>
                </article>
            </div>
        </div>
    )
}

export default About;
