const StarshipCard = ({starship}) => {
    return (
        <>
            <div className="card">
                <h4>{starship.name}</h4>
                <p>Class: {starship.starship_class}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Model: {starship.model}</p>
            </div>
        </>
    )
}

export default StarshipCard;