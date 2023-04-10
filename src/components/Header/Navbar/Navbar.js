import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-list-item">
                    <NavLink exact to="/">
                        home
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/services">
                        services
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/project">
                        projects
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/about">
                        about
                    </NavLink>
                </li>
                <li className="navigation-list-item">
                    <NavLink to="/contact">
                        contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
  
}

export default Navbar;