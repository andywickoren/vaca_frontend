import "./TripView.css";
import NavBar from "../Navbar/Navbar";
import TripViewHeader from "../TripViewHeader/TripViewHeader";
import TripCardList from "../TripCardList/TripCardList";
import Footer from "../Footer/Footer";

function TripView({ testCards }) {
  const layout = "TripView";
  return (
    <>
      <NavBar layout={layout}></NavBar>
      <TripViewHeader></TripViewHeader>
      <TripCardList testCards={testCards} layout={layout}></TripCardList>
      {/* <Footer></Footer> */}
    </>
  );
}

export default TripView;
