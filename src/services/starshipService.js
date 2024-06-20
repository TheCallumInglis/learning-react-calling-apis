const BASE_URL = "https://swapi.dev/api";

export const getStarships = async () => {
    try {
        const response = await fetch(`${BASE_URL}/starships/`);
        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error(error);
        return [];
    }
}