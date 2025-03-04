import "./Footer.css";
import GithubIcon from "../../assets/github-icon.png";
import GithubIconHovered from "../../assets/GithubIconHovered.svg";
import FacebookIcon from "../../assets/facebook6-icon.png";
import FacebookIconHovered from "../../assets/FacebookIconHovered.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Footer({ dominantColor }) {
  const [githubIconHovered, setGithubIconHovered] = useState(false);
  const [facebookIconHovered, setFacebookIconHovered] = useState(false);
  const backgroundColor = dominantColor
    ? `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.5)`
    : "rgba(255, 255, 255, 0.4)"; // Lighter white for fallback

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `linear-gradient(to bottom, 
        ${backgroundColor}, 
       rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.15)`,
      }}
    >
      <div className="footer__copyright-container">
        <div className="footer__copyright">© 2025 Joseph Wickoren</div>
      </div>
      <div className="footer__options">
        <Link className="footer__link" to="/">
          <button className="footer__options-home">Home</button>
        </Link>
        <a href="www.github.com" target="_blank" rel="noopener noreferrer">
          <img
            className="footer__options-github-icon"
            src={githubIconHovered ? GithubIconHovered : GithubIcon}
            onMouseEnter={() => setGithubIconHovered(true)}
            onMouseLeave={() => setGithubIconHovered(false)}
          ></img>
        </a>
        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            className="footer__options-facebook-icon"
            src={facebookIconHovered ? FacebookIconHovered : FacebookIcon}
            onMouseEnter={() => setFacebookIconHovered(true)}
            onMouseLeave={() => setFacebookIconHovered(false)}
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
