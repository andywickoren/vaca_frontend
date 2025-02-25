import avatarImage from "../../assets/zep.jpg";
import "./Avatar.css";

function Avatar() {
  return (
    <div className="avatar-container">
      <img src={avatarImage} alt="Search" className="avatar-image" />
    </div>
  );
}

export default Avatar;
