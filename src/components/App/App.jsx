import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import TripView from "../TripView/TripView";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SigninModal from "../SigninModal/SigninModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfirmRegisterModal from "../ConfirmRegisterModal/ConfirmRegisterModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import cardinal from "../../assets/Cardinal.jpg";
import TripModal from "../TripModal/TripModal";
import GalleryPage from "../GalleryPage/GalleryPage";

function App() {
  const [dominantColor, setDominantColor] = useState("#fff");
  const [tripData, setTripData] = useState([]);
  console.log(tripData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState("Carol");

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  function handleCloseClick() {
    setActiveModal("");
  }

  const handleAddTrip = (newData) => {
    setTripData((prevData) => [newData, ...prevData]);
  };

  function handleSigninClick() {
    setActiveModal("signin-modal");
  }

  function handleSignin() {
    console.log("signed in bro");
  }

  function handleSignup() {
    console.log("signed up bro");
    setActiveModal("confirm-register-modal");
  }

  function handleSignupClick() {
    setActiveModal("register-modal");
  }

  function handleAddTripClick() {
    setActiveModal("trip-modal");
  }

  function handleSubmit() {
    console.log("you submitted bro");
  }

  function testCards() {
    const cardList = [
      {
        name: "item5",
        imageUrl:
          "https://www.cherokeelodgecondos.com/media/65cbb163a5f14780f50d42b0/large.webp",
      },
      {
        name: "item1",
        imageUrl:
          "https://www.visittenaya.com/dbcwp/wp-content/uploads/2022/11/visittenaya-copy-exploreyosemite-yosemite-falls.jpg",
      },
      {
        name: "item2",
        imageUrl: "/src/assets/Cardinal.jpg",
      },
      {
        name: "item3",
        imageUrl: "/src/assets/Eagletest.jpg",
      },
      {
        name: "item4",
        imageUrl: "/src/assets/bear.jpg",
      },

      {
        name: "item6",
        imageUrl: "/src/assets/whale.jpg",
      },
      {
        name: "item7",
        imageUrl:
          "https://preview.redd.it/this-is-a-baby-giraffe-giraffes-are-the-tallest-mammals-on-v0-mvv5bpf4uh591.jpg?auto=webp&s=d8896b33d377b666580e3d42faea101f10ba3e65",
      },
    ];
    return cardList;
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="app">
        {/* <Header></Header> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  handleAddTripClick={handleAddTripClick}
                  tripData={tripData}
                  handleSigninClick={handleSigninClick}
                />
                <About></About>
              </>
            }
          />
          {/* <Route
            path="/trip"
            element={<TripView testCards={testCards}></TripView>}
          /> */}
          <Route
            path="/gallery/:tripSlug"
            element={
              <GalleryPage
                tripData={tripData}
                dominantColor={dominantColor}
                setDominantColor={setDominantColor}
              />
            }
          />
        </Routes>

        <Footer dominantColor={dominantColor}></Footer>
        {activeModal === "signin-modal" && (
          <SigninModal
            handleSignin={handleSignin}
            handleCloseClick={handleCloseClick}
            isOpen={activeModal === "signin-modal"}
            openRegisterModal={handleSignupClick}
          ></SigninModal>
        )}
        {activeModal === "register-modal" && (
          <RegisterModal
            handleSignup={handleSignup}
            handleCloseClick={handleCloseClick}
            isOpen={activeModal === "register-modal"}
            openSigninModal={handleSigninClick}
          ></RegisterModal>
        )}
        {activeModal === "confirm-register-modal" && (
          <ConfirmRegisterModal
            openSigninModal={handleSigninClick}
            handleCloseClick={handleCloseClick}
          ></ConfirmRegisterModal>
        )}
        {activeModal === "trip-modal" && (
          <TripModal
            handleAddTrip={handleAddTrip}
            openSigninModal={handleSigninClick}
            handleCloseClick={handleCloseClick}
            handleSubmit={handleSubmit}
            isOpen={activeModal === "trip-modal"}
          ></TripModal>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
