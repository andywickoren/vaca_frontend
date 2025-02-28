import "./NavbarGallery.css";
import { Link } from "react-router-dom";
import mainSignin from "../../assets/main-signin.png";
import userRectangle from "../../assets/user-rectangle.png";
import Compass from "../../assets/compass-white.svg";
import CompassAnimation from "../../assets/compass-white.gif";
import union from "../../assets/union.png";
import { useEffect, useState } from "react";
import ImageUploadIcon from "../../assets/ImageUpload.svg";
import ImageUploadOnHover from "../../assets/ImageUploadOnHover.svg";
import CompassBlack from "../../assets/compass-black.svg";
import CompassBlackAnimation from "../../assets/compass-black.gif";
import ImageUploadBlack from "../../assets/ImageUploadBlack.svg";
import ImageUploadDarkGrey from "../../assets/ImageUploadDarkGrey.svg";
import ReturnBlack from "../../assets/ReturnBlack.svg";
import ReturnGrey from "../../assets/ReturnGrey.svg";

function NavbarGallery({
  handleSigninClick,
  layout,
  username,
  handleAddTripClick,
  tripName,
}) {
  console.log(tripName);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [compassHover, setCompassHover] = useState(false);
  const [imageUploadHover, setImageUploadHover] = useState(false);
  const [returnHovered, setReturnHovered] = useState(false);

  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar-gallery">
      <div className="navbar__logo">
        {/* <div className="navbar__news-explorer-button">Around</div> */}
        <img
          src={compassHover ? CompassBlackAnimation : CompassBlack}
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
              src={imageUploadHover ? ImageUploadDarkGrey : ImageUploadBlack}
              alt=""
              className="navbar__image-upload-icon"
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
              onClick={handleAddTripClick}
            />
            {imageUploadHover && (
              <span className="navbar__tooltip navbar__tooltip_mode_black">
                Add photos of {tripName}
              </span>
            )}
          </div>
          <button
            className="navbar__button navbar__button_type_logout navbar__button_style_dark "
            onMouseEnter={() => setReturnHovered(true)}
            onMouseLeave={() => setReturnHovered(false)}
          >
            <Link className="navbar__link" to="/">
              <div className="navbar__button-wrapper">
                <p className="navbar__logout-button-text">Carol</p>
                <img
                  src={returnHovered ? ReturnGrey : ReturnBlack}
                  alt=""
                  className="navbar__return-icon"
                />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarGallery;
