import { useState } from 'react';

const StarshipSearch = ({ onSearchChange }) => {
    const [search, setSearch] = useState('');

    const onLocalSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const onLocalSearchSubmit = (event) => {
        event.preventDefault();
        onSearchChange(search);
    }

    return (
        <>
            <h3>Search</h3>
            <form onSubmit={onLocalSearchSubmit}>
                <label htmlFor="search">Search Term: 
                    <input type="text" id="search" className="search" value={search} onChange={onLocalSearchChange} />
                </label>

                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default StarshipSearch;