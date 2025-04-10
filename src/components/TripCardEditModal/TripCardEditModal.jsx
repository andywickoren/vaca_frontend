import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./TripCardEditModal.css";
import { useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";

function TripCardEditModal({ handleCloseClick, isOpen }) {
  const handleOverlay = (e) => {
    e.target === e.currentTarget && handleCloseClick();
  };
  const [formData, setFormData] = useState({
    tripName: "",
    tripSlug: "",
    nationalPark: "",
    state: "",
    country: "",
    images: [],
    date: "",
  });

  console.log("you opened the modal bro");
  return (
    <ModalWithForm formData={formData} isOpen={isOpen}>
      {/* <div className="trip-card-edit-modal" onClick={handleOverlay}>
      <div className="trip-card-edit-modal__content"> */}
      {/* <h2 className="trip-card-edit-modal__trip-title">Greers Ferry</h2> */}
      {/* <p className="trip-card-edit-modal__trip-date">May 5, 2025</p>
      </div>
    </div> */}
      <div className="please"></div>
    </ModalWithForm>
  );
}
export default TripCardEditModal;
