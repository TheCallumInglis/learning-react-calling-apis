const BASE_URL = "https://swapi.dev/api";

export const getStarships = async () => {
    let url = `${BASE_URL}/starships/`;
    let starships = [];
    
    try {
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        starships = starships.concat(data.results);
        url = data.next;
      }
      return starships;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  