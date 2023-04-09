import './Services.css';
import ServiceEclipse from './ServiceEclipse/ServiceEclipse';
import { serviceIcon01, serviceIcon02, serviceIcon03 } from '../../assets/images/SVGs';

const Services = () => {
    return (
            <div className="services">
                <h2 className="services-heading">services</h2>
                <ul className="services-list">
                    <li className="services-list-item">
                        <ServiceEclipse serviceIcon={serviceIcon01}/>
                        <div className="services-list-item-name">Service Name</div>
                    </li>
                    <li className="services-list-item">
                        <ServiceEclipse serviceIcon={serviceIcon02}/>
                        <div className="services-list-item-name">Service Name</div>
                    </li>
                    <li className="services-list-item">
                        <ServiceEclipse serviceIcon={serviceIcon03}/>
                        <div className="services-list-item-name">Service Name</div>
                    </li>
                </ul>
            </div>
    )
}

export default Services;