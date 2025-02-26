import { useState } from "react";
import "./TripCard.css";
import bookmarkContainer from "../../assets/bookmark-container.png";
// import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import BookmarkUnmarked from "../../assets/BookmarkUnmarked.svg";
import bookmarkMarked from "../../assets/bookmark-marked.png";
import TripCardEditIcon from "../../assets/TripCardEditIcon.svg";
import BookmarkUnmarkedHovered from "../../assets/BookmarkUnmarkedHovered.svg";
import TripCardEditIconHovered from "../../assets/TripCardEditIconHovered.svg";

function TripCard({ state, imageUrl, country, nationalPark }) {
  // const TripCard = ({ trip }) => {
  //   const fullStateName = stateAbbreviations[trip.state] || trip.state;
  // }
  const [isHovered, setIsHovered] = useState(false);
  const [bookmarkHovered, setBookmarkHovered] = useState(false);
  const [editIconHovered, setEditIconHovered] = useState(false);

  const [isSaved, setisSaved] = useState(false);
  return (
    <div className="tripcard__container">
      <div className="tripcard__image-container">
        <img src={imageUrl} alt="" className="tripcard__image" />
        <div className="tripcard__bookmark-container">
          {!isSaved ? (
            <img
              className="tripcard__bookmark_unmarked"
              src={bookmarkHovered ? BookmarkUnmarkedHovered : BookmarkUnmarked}
              onMouseEnter={() => setBookmarkHovered(true)}
              onMouseLeave={() => setBookmarkHovered(false)}
            />
          ) : (
            <img
              className="tripcard__bookmark_unmarked"
              src={bookmarkMarked}
              onMouseEnter={setIsHovered(true)}
              onMouseLeaave={setIsHovered(false)}
            />
          )}
        </div>
      </div>
      <div className="tripcard__info">
        <div className="tripcard__edit-container">
          <div className="tripcard__date">{nationalPark}</div>
          <img
            src={editIconHovered ? TripCardEditIconHovered : TripCardEditIcon}
            alt=""
            className="tripcard__edit-icon"
            onMouseEnter={() => setEditIconHovered(true)}
            onMouseLeave={() => setEditIconHovered(false)}
          />
        </div>
        <h3 className="tripcard__title">{state}</h3>
        <p className="tripcard__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <footer className="tripcard__footer">NATIONAL GEOGRAPHIC</footer>
      </div>
    </div>
  );
}

export default TripCard;
