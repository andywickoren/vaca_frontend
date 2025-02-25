import { useState } from "react";
import "./TripCard.css";
import bookmarkContainer from "../../assets/bookmark-container.png";
import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import bookmarkMarked from "../../assets/bookmark-marked.png";

function TripCard({ name, url }) {
  const [isSaved, setisSaved] = useState(true);
  return (
    <div className="tripcard__container">
      <div className="tripcard__image-container">
        <img src={url} alt="" className="tripcard__image" />
        <img className="tripcard__bookmark-container" src={bookmarkContainer} />
        {!isSaved ? (
          <img className="tripcard__bookmark_unmarked" src={bookmarkUnmarked} />
        ) : (
          <img className="tripcard__bookmark_unmarked" src={bookmarkMarked} />
        )}
      </div>
      <div className="tripcard__info">
        <div className="tripcard__date">Today's Date</div>
        <h3 className="tripcard__title">CardTitle</h3>
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
