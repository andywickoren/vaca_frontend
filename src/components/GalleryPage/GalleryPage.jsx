import React from "react";
import NavbarGallery from "../NavbarGallery/NavbarGallery";
import ArkansasIcon from "../../assets/ArkansasIcon.svg";
import NextArrowBlack from "../../assets/NextArrowBlack.svg";
import NextArrowWhite from "../../assets/NextArrowWhite.svg";
import Gallery from "../Gallery/Gallery";
import "./GalleryPage.css";
import ColorThief from "colorthief";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditIcon from "../../assets/EditIcon.svg";
function GalleryPage({ tripData, dominantColor, setDominantColor }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [nextArrowHovered, setNextArrowHovered] = useState(false);
  //   const [dominantColor, setDominantColor] = useState(null);
  const { tripSlug } = useParams();
  const navigate = useNavigate();
  const selectedTrip = tripData.find((trip) => trip.tripSlug === tripSlug);
  const currentIndex = tripData.findIndex((trip) => trip.tripSlug === tripSlug);
  const nextIndex = (currentIndex + 1) % tripData.length;
  const nextTrip = tripData[nextIndex];
  const handleNext = () => {
    navigate(`/gallery/${nextTrip.tripSlug}`);
  };
  //   console.log("SELECTED TRIP: ", selectedTrip);

  useEffect(() => {
    if (selectedTrip && selectedTrip.images && selectedTrip.images.length > 0) {
      const img = new Image();
      img.src = `http://localhost:5001${selectedTrip.images[0]}`;
      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img); // Get the dominant color
        console.log("Dominant Color:", color);
        setDominantColor(color);
      };
    }
  }, [selectedTrip]);

  return (
    <div className="gallery-page">
      <div className="gallery-page-background">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(http://localhost:5001${selectedTrip.images[0]})`, // Use full image URL
          }}
        ></div>
        <div className="gallery-page__wrapper">
          <NavbarGallery tripName={selectedTrip.tripName} />
          <div className="gallery-page__intro">
            <div className="grid-cell top-left">
              <div className="gallery-page__main-title">
                <h2 className="gallery-page__trip-title">
                  {selectedTrip.tripName}
                </h2>
                <img
                  src={ArkansasIcon}
                  alt=""
                  className="gallery-page__trip-icon"
                />
              </div>
            </div>
            <div className="grid-cell top-right">
              <h3 className="gallery-page__description-title">
                Test Description Title
              </h3>
              <img src={EditIcon} alt="" className="gallery-page__edit-icon" />
            </div>
            <div className="grid-cell bottom-left">
              {/* dynamically set this background based on the colors
          in this image */}
              <div className="gallery-page__main-image-wrapper">
                <img
                  src={`http://localhost:5001${selectedTrip.images[0]}`}
                  alt=""
                  className="gallery-page__main-image"
                />
              </div>
            </div>
            <div className="grid-cell bottom-right">
              <div
                className={`gallery-page__next-trip ${
                  isExpanded ? "gallery-page__next-trip_collapse" : ""
                }`}
                onMouseEnter={() => setNextArrowHovered(true)}
                onMouseLeave={() => setNextArrowHovered(false)}
                onClick={handleNext}
              >
                <p className="gallery-page__next-trip-name">
                  {nextTrip.tripName}
                </p>
                <img
                  src={nextArrowHovered ? NextArrowBlack : NextArrowWhite}
                  alt=""
                  className="gallery-page__next-arrow"
                />
              </div>
              <div className="bottom-right__overlay"></div>{" "}
              {/* Overlay layer */}
              <p
                className={`gallery-page__description-text ${
                  isExpanded ? "expanded" : ""
                }`}
              >
                Yes, a finite automaton (FA) can indeed be considered a kind of
                parser, but it’s a very specific and limited type of parser. To
                understand this, let’s break down what a finite automaton is,
                what a parser is, and how they relate to each other. What is a
                Finite Automaton? A finite automaton (also called a finite state
                machine) is a theoretical model of computation used to recognize
                patterns in input strings. It consists of: States: A finite set
                of states, including a start state and one or more accepting
                (final) states. Transitions: Rules that define how the automaton
                moves from one state to another based on input symbols.
              </p>
              <div
                className="gallery-page__show-more-wrapper"
                onClick={() => setIsExpanded((prev) => !prev)}
              >
                <div className="gallery-page__show-more-button">
                  <p className="gallery-page__show-more-text">
                    {isExpanded ? "Show Less" : "Show More"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery
        selectedTrip={selectedTrip}
        dominantColor={dominantColor}
      ></Gallery>
    </div>
  );
}

export default GalleryPage;
