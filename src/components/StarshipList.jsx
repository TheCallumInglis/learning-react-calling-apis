import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
    return (
        <>
            <h3>Starships</h3>
            <p>Number of results: {starships.length > 0 ? starships.length : "Loading..."}</p>

            <div className="starship-list">
            {starships.map((starship) => (
                <StarshipCard key={starship.name} starship={starship} />
            ))}
            </div>
        </>
    );
}

export default StarshipList;