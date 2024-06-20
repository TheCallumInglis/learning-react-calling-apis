import { useState, useEffect } from 'react'
import { getStarships } from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import './App.css'

const App = () => {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getStarships().then((data) => {
      setStarships(data);
    });

    document.getElementById('search').focus();
  }, []);

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <>
      <h2>Star Wars API</h2>

      <StarshipSearch onSearchChange={handleSearchChange} />   
      <StarshipList starships={starships} searchTerm={search} />   
    </>
  );
};

export default App;