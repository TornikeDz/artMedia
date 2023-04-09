import './CompanyName.css';

const CompanyName = () => {
    return (
        <div className="company-header">
            <img className="company-header-name" 
            src={require('../../../assets/images/logo-header.svg').default} 
            alt="company logo"
            width="61.53px" 
            height="68px"/>
            <h1 className="company-header-logo">Company Name</h1>
        </div>
    )
}

export default CompanyName;
