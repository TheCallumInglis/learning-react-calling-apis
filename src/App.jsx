import { useState, useEffect } from 'react'
import { getStarships } from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import './App.css'

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getStarships().then((data) => {
      setStarships(data);
    });
  }, []);

  return (
    <>
      <h2>Star Wars API</h2>

      <StarshipSearch />   
      <StarshipList starships={starships} />   
    </>
  );
};

export default App;