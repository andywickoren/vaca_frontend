import { states } from "../../constants/states";
import { useParams } from "react-router-dom";

function GalleryPage({ tripData }) {
  const { tripSlug } = useParams();
  const selectedTrip = tripData.find((trip) => trip.tripSlug === tripSlug);

  const state = selectedTrip?.state;
  const images = selectedTrip?.images || [];

  console.log("State:", state);
  console.log("Images:", images);

  const stateObj = states.find(
    (stateIndex) => stateIndex.value === state || stateIndex.label === state
  );

  const stateIcon = stateObj ? stateObj.icon : null;

  console.log(stateIcon);

  return <div className="gallery-page"></div>;
}

export default GalleryPage;
