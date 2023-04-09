import './ServiceEclipse.css';

const ServiceEclipse = ({ serviceIcon }) => {
    return(
        <div className="eclipses">
            <div className="eclipse-01">
            </div>
            <div className="eclipse-02"></div>
            {serviceIcon && <span className="eclipse-service-icon">{serviceIcon}</span>}

        </div>
    )
}

export default ServiceEclipse;
