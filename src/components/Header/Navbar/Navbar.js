import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-list-item"><a href="/">home</a></li>
                <li className="navigation-list-item"><a href="/services">services</a></li>
                <li className="navigation-list-item"><a href="/project">projects</a></li>
                <li className="navigation-list-item"><a href="/about">about</a></li>
                <li className="navigation-list-item"><a href="/contact">contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
