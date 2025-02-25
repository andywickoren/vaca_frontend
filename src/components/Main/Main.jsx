import "./Main.css";
import TripCard from "../TripCard/TripCard";
import showMore from "../../assets/show-more.png";
import TripCardList from "../TripCardList/TripCardList";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Main({ testCards, handleSigninClick, handleAddTrip }) {
  const { currentUser } = useContext(CurrentUserContext);
  const layout = "Home";
  return (
    <>
      <Header
        handleSigninClick={handleSigninClick}
        handleAddTrip={handleAddTrip}
      ></Header>
      <div className="main">
        <h2 className="main__heading">{`${currentUser}'s Trips`}</h2>
        <TripCardList testCards={testCards} layout={layout} />
        <div className="main__show-more-button-container">
          <button className="main__show-more-button">Show More</button>
        </div>
      </div>
    </>
  );
}

export default Main;
