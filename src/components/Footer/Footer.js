import './Footer.css';
import CompanyNameFooter from './CompanyNameFooter/CompanyNameFooter';
import FooterForm from './FooterForm/FooterForm';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-name">
                    <CompanyNameFooter/>
                </div>
                <div className="footer-info">
                    <div className="footer-info-navigation">
                        <ul className="footer-info-navigation-list">
                            <li className="footer-info-navigation-list-item"><a href="/services">services</a></li>
                            <li className="footer-info-navigation-list-item"><a href="/project">project</a></li>
                            <li className="footer-info-navigation-list-item"><a href="/about">about</a></li>
                            <li className="footer-info-navigation-list-item"><a href="/contact">contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-info-contact">
                        <img src={require('../../assets/images/logo-instagram.svg').default} alt="instagram"/>
                        <img src={require('../../assets/images/logo-fb.svg').default} alt="facebook"/>
                    </div>
                </div>
                <div className="footer-contact">
                    <FooterForm/>
                </div>
            </div>
        </div>
    )
}

export default Footer;