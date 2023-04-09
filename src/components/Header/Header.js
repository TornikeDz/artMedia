import './Header.css';
import CompanyName from './CompanyName/CompanyName';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    return (
        <div className="header">
            <CompanyName/>
            <Navbar/>
            <SearchBar/>
        </div>
    )
}

export default Header;
