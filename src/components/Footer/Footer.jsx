import "./Footer.css";
import githubIcon from "../../assets/github-icon.png";
import facebookIcon from "../../assets/facebook6-icon.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">© 2025 Joseph Wickoren</div>
      <div className="footer__options">
        <Link className="footer__link" to="/">
          <button className="footer__options-home">Home</button>
        </Link>
        <a href="www.github.com" target="_blank" rel="noopener noreferrer">
          <img className="footer__options-github-icon" src={githubIcon}></img>
        </a>
        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            className="footer__options-facebook-icon"
            src={facebookIcon}
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
