import './SearchBar.css';
import { useState } from 'react';

export const SearchBar = () => {
    const [value, setValue] = useState('');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
    }

    return (
        <div className="search-container">
            <form className="search-container-form" onSubmit={handleSubmit}>
                <input className="search-container-form-input"
                    type="text"
                    placeholder="Search Keyword ..."
                    value={value}
                    onChange={handleChange}
                    />
                <button className="search-container-form-icon" type="submit">
                    <img 
                        src={require('../../../assets/images/search-bar-loop.svg').default} 
                        alt="search-bar loop"
                        width="16px"
                        height="16px"
                        /> 
                </button>
            </form>
        </div>
    )
}