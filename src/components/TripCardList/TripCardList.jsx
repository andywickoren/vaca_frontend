import "./TripCardList.css";
import TripCard from "../TripCard/TripCard";

function TripCardList({ tripData }) {
  return (
    <ul className="trip-card-list">
      {tripData.map((data, index) => {
        console.log("Data in parent component: ", data); // Log the entire data object
        console.log("Images Array: ", data.images); // Log the images array
        const imageUrl = `http://localhost:5001${data.images[0]}`;

        return (
          <TripCard
            key={index}
            imageUrl={imageUrl} // Check the first image
            state={data.state}
            country={data.country}
            nationalPark={data.nationalPark}
            tripSlug={data.tripSlug}
            tripName={data.tripName}
            date={data.date}
          />
        );
      })}
    </ul>
  );
}

export default TripCardList;
