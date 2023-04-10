import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-list-item">
                    <NavLink exact to="/">
                        home
                        <div className="navigation-list-underline"></div>
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/services">
                        services
                        <div className="navigation-list-underline"></div>
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/project">
                        projects
                        <div className="navigation-list-underline"></div>
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/about">
                        about
                        <div className="navigation-list-underline"></div>
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/contact">
                        contact
                        <div className="navigation-list-underline"></div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
  
}

export default Navbar;