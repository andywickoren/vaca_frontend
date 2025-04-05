import { useState } from "react";
import { Link } from "react-router-dom";
import "./TripCard.css";
import bookmarkContainer from "../../assets/bookmark-container.png";
// import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import BookmarkUnmarked from "../../assets/BookmarkUnmarked.svg";
import bookmarkMarked from "../../assets/bookmark-marked.png";
import TripCardEditIcon from "../../assets/TripCardEditIcon.svg";
import BookmarkUnmarkedHovered from "../../assets/BookmarkUnmarkedHovered.svg";
import TripCardEditIconHovered from "../../assets/TripCardEditIconHovered.svg";
import { stateAbbreviations } from "../../constants/states";
import ClickHereIcon from "../../assets/ClickHereIcon.svg";

function TripCard({
  tripName,
  state,
  imageUrl,
  country,
  nationalPark,
  tripSlug,
  date,
}) {
  console.log("Image URL ====================>", imageUrl);
  console.log("State passed to TripCard ****************:", state);

  console.log("DATE: ", date);
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
        <Link className="tripcard__link" to={`/gallery/${tripSlug}`}>
          <img src={imageUrl} alt="" className="tripcard__image" />
        </Link>
        <div className="tripcard__bookmark-container">
          <img
            className="tripcard__bookmark_unmarked"
            src={bookmarkHovered ? BookmarkUnmarkedHovered : BookmarkUnmarked}
            onMouseEnter={() => setBookmarkHovered(true)}
            onMouseLeave={() => setBookmarkHovered(false)}
          />
        </div>
      </div>
      <div className="tripcard__info">
        <div className="tripcard__edit-container">
          <div className="tripcard__date">{date}</div>
          <img
            src={editIconHovered ? TripCardEditIconHovered : TripCardEditIcon}
            alt=""
            className="tripcard__edit-icon"
            onMouseEnter={() => setEditIconHovered(true)}
            onMouseLeave={() => setEditIconHovered(false)}
          />
        </div>
        <Link className="tripcard__link" to={`/gallery/${tripSlug}`}>
          <div className="tripcard__title-container">
            <h3 className="tripcard__title">{tripName}</h3>
            <img
              src={ClickHereIcon}
              alt=""
              className="tripcard__click-here-icon"
            />
          </div>
        </Link>
        <p className="tripcard__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <footer className="tripcard__footer">
          {stateAbbreviations[state].toUpperCase()}
        </footer>
      </div>
    </div>
  );
}

export default TripCard;
