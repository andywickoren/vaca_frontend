import "./TripCardList.css";
import TripCard from "../TripCard/TripCard";

function TripCardList({ tripCards }) {
  // const cardsList = testCards();
  // console.log(cardsList[0].imageUrl);
  return (
    <ul className="news-card-list">
      {tripCards.map((card, index) =>
        card.images.map((image, imageIndex) => (
          <TripCard
            key={`${index}-${imageIndex}`}
            imageUrl={image}
            state={card.state}
            country={card.country}
            nationalPark={card.nationalPark}
          />
        ))
      )}
    </ul>
  );
}

export default TripCardList;
