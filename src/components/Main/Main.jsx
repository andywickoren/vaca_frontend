import "./Main.css";
import TripCard from "../TripCard/TripCard";
import showMore from "../../assets/show-more.png";
import TripCardList from "../TripCardList/TripCardList";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { useState } from "react";
import MoutainIcon from "../../assets/MountainIcon.svg";

function Main({ tripData, handleSigninClick, handleAddTripClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  const layout = "Home";
  // const [tripCards, setTripCards] = useState(testCards);

  // const handleAddTrip = (newCard) => {
  //   setTripCards((prevCards) => [newCard, ...prevCards]);
  // };
  return (
    <>
      <Header
        handleSigninClick={handleSigninClick}
        handleAddTripClick={handleAddTripClick}
      ></Header>
      <div className="main">
        <div className="main__heading-wrapper">
          <h2 className="main__heading">{`${currentUser}'s Trips`} </h2>
          <img src={MoutainIcon} alt="" className="main__heading-icon" />
        </div>

        <TripCardList tripData={tripData} layout={layout} />
        <div className="main__show-more-button-container">
          <button className="main__show-more-button">Show More</button>
        </div>
      </div>
    </>
  );
}

export default Main;
