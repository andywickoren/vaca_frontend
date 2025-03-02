import React from "react";
import { useParams } from "react-router-dom";
import NavbarGallery from "../NavbarGallery/NavbarGallery";
import ArkansasIcon from "../../assets/ArkansasIcon.svg";
import Gallery from "../Gallery/Gallery";
import "./GalleryPage.css";

function GalleryPage({ tripData }) {
  const { tripSlug } = useParams();
  const selectedTrip = tripData.find((trip) => trip.tripSlug === tripSlug);
  //   console.log("SELECTED TRIP: ", selectedTrip);

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
            </div>
          </div>
        </div>
      </div>
      <Gallery selectedTrip={selectedTrip}></Gallery>
    </div>
  );
}

export default GalleryPage;
