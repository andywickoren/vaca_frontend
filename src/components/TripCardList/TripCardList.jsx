import "./TripCardList.css";
import TripCard from "../TripCard/TripCard";

function TripCardList({ tripData }) {
  // const cardsList = testCards();
  // console.log(cardsList[0].imageUrl);
  return (
    <ul className="trip-card-list">
      {tripData.map(
        (data, index) => (
          // data.images.map((image, imageIndex) => (
          <TripCard
            // key={`${index}-${imageIndex}`}
            imageUrl={data.images[0]}
            state={data.state}
            country={data.country}
            nationalPark={data.nationalPark}
            tripSlug={data.tripSlug}
            tripName={data.tripName}
          />
        )
        // ))
      )}
    </ul>
  );
}

export default TripCardList;
