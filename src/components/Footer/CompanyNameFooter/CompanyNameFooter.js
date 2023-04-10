import './CompanyNameFooter.css';
import { logoFooter } from '../../../assets/images/SVGs';

const CompanyNameFooter = () => {
    return (
        <div className="company-footer-container">
            <div className="company-footer">
                <img src={require('../../../assets/images/logo-footer.svg').default} className="company-footer-name"
                    alt="company logo"
                    width="61.53px" 
                    height="68px"
                    />
                <h1 className="company-footer-logo">Company Name</h1>
            </div>
            <h6 className="company-footer-rights">© 2023 All Rights Reserved </h6>
        </div>
    )
}

export default CompanyNameFooter;