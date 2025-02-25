import "./Navbar.css";
import { Link } from "react-router-dom";
import mainSignin from "../../assets/main-signin.png";
import userRectangle from "../../assets/user-rectangle.png";
import Compass from "../../assets/compass-white.svg";
import CompassAnimation from "../../assets/compass-white.gif";
import union from "../../assets/union.png";
import { useEffect, useState } from "react";
import ImageUploadIcon from "../../assets/ImageUpload.svg";
import ImageUploadOnHover from "../../assets/ImageUploadOnHover.svg";
function Navbar({ handleSigninClick, layout, username, handleAddTripClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [compassHover, setCompassHover] = useState(false);
  const [imageUploadHover, setImageUploadHover] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        {/* <div className="navbar__news-explorer-button">Around</div> */}
        <img
          src={compassHover ? CompassAnimation : Compass}
          alt="Compass Logo"
          className="navbar__logo-icon"
          onMouseEnter={() => setCompassHover(true)}
          onMouseLeave={() => setCompassHover(false)}
        />

        <div className="navbar__label">
          <div className="navbar__logo-around">Around</div>
          <div className="navbar__logo-the-us">The U.S.</div>
        </div>
      </div>
      <div className="navbar__options">
        <div className="navbar__logged-in-options">
          <div
            className="navbar__image-upload-container"
            onMouseEnter={() => setImageUploadHover(true)}
            onMouseLeave={() => setImageUploadHover(false)}
          >
            <img
              src={imageUploadHover ? ImageUploadOnHover : ImageUploadIcon}
              alt=""
              className="navbar__image-upload-icon"
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
              onClick={handleAddTripClick}
            />
            {imageUploadHover && (
              <span className="navbar__tooltip">Upload Images</span>
            )}
          </div>
          <button className="navbar__button navbar__button_type_logout">
            <p className="navbar__logout-button-text">Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
