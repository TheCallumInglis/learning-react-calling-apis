const StarshipSearch = () => {
    return (
        <>
            <h3>Search</h3>
            <div>
                <label htmlFor="search">Search Term: 
                <input type="text" id="search" className="search" />
                </label>

                <button type="button">Search</button>
            </div>
        </>
    )
}

export default StarshipSearch;