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
function GalleryPage({ tripData }) {
  const [nextArrowHovered, setNextArrowHovered] = useState(false);
  const [dominantColor, setDominantColor] = useState(null);
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
      img.src = selectedTrip.images[0];
      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img); // Get the dominant color
        console.log("Dominant Color:", color);
        setDominantColor(color);
      };
    }
  }, [selectedTrip]);

  //Bro when tripCards comes from TripModal youre going to have to move he first
  //array element to the end and then render this page so that the lasat arraay element
  //appears aas the main display image and then the tripCrads array is just rendered in
  //order for the gallery component, so that the display image comes last on that portion

  return (
    <div className="gallery-page">
      <div className="gallery-page-background">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${selectedTrip.images[0]})` }}
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
            </div>
            <div className="grid-cell bottom-left">
              {/* dynamically set this background based on the colors
          in this image */}
              <div className="gallery-page__main-image-wrapper">
                <img
                  src={selectedTrip.images[0]}
                  alt=""
                  className="gallery-page__main-image"
                />
              </div>
            </div>
            <div className="grid-cell bottom-right">
              <div
                className="gallery-page__next-trip"
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
              <p className="gallery-page__description-text">
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
              <div className="gallery-page__show-more-wrapper">
                <div className="gallery-page__show-more-button">
                  <p className="gallery-page__show-more-text">Show More</p>
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
