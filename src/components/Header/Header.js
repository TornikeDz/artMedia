import './Header.css';
import CompanyName from './CompanyName/CompanyName';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    return (
        <div className="header">
          <div className="header-company-name"><CompanyName/></div>
          <div className="header-navbar"><Navbar/></div>
          <div className="header-search-bar"><SearchBar/></div>
        </div>
    )
}

export default Header;
