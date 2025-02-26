import "./ModalWithForm.css";
import close from "../../assets/close.png";
import ModalTitleIcon from "../../assets/ModalTitleIcon.svg";
import ModalTitleIconHovered from "../../assets/ModalTitleIconHovered.svg";
import { useState } from "react";

function ModalWithForm({
  children,
  handleCloseClick,
  isOpen,
  title,
  formData,
  handleSubmit,
}) {
  const [modalTitleIconIsHovered, setModalTitleIconIsHovered] = useState(false);
  const handleOverlay = (e) => {
    e.target === e.currentTarget && handleCloseClick();
  };
  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onClick={handleOverlay}
    >
      <div
        className={`modal__content ${
          formData.images.length > 0 ? "modal__content_with-images" : ""
        }`}
      >
        <div className="modal__title-wrapper">
          <h2 className="modal__title">{title}</h2>
          <img
            src={
              modalTitleIconIsHovered ? ModalTitleIconHovered : ModalTitleIcon
            }
            alt=""
            className="modal__title-icon"
            onMouseEnter={() => setModalTitleIconIsHovered(true)}
            onMouseLeave={() => setModalTitleIconIsHovered(false)}
            onClick={handleCloseClick}
          />
        </div>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
          aria-label="close"
        >
          <img src={close} alt="" className="modal__close-icon" />
        </button>
        <form onSubmit={handleSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
