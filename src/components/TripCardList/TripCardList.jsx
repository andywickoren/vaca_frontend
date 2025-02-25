import "./TripCardList.css";
import TripCard from "../TripCard/TripCard";

function TripCardList({ testCards, layout }) {
  const cardsList = testCards();
  console.log(cardsList[0].imageUrl);
  return (
    <ul className="news-card-list">
      {cardsList.map((card) => (
        <TripCard name={card.name} url={card.imageUrl} key={card.name} />
      ))}
    </ul>
  );
}

export default TripCardList;
