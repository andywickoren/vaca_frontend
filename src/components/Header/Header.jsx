import "./Header.css";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import headerBackground from "../../assets/header-background.png";

function Header({ handleSigninClick, handleAddTripClick }) {
  const layout = "Home";
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(http://reneeroaming.com/wp-content/uploads/2020/08/Best-National-Park-Road-Trip-Itinerary-Grand-Teton-National-Park-Van-Life-819x1024.jpg)`,

        backgroundPosition: "right 70% top 50%",
      }}
    >
      <Navbar
        handleSigninClick={handleSigninClick}
        layout={layout}
        handleAddTripClick={handleAddTripClick}
      ></Navbar>
      <div className="header__content">
        <h1 className="header__title">Search a State</h1>
        <p className="header__caption">
          Filter your trips by state, country, region or National Parks
        </p>
        <SearchForm></SearchForm>
      </div>
    </header>
  );
}

export default Header;
