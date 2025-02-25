import "./ModalWithForm.css";
import close from "../../assets/close.png";

function ModalWithForm({
  children,
  handleCloseClick,
  isOpen,
  title,
  formData,
  handleSubmit,
}) {
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
        <h2 className="modal__title">{title}</h2>
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
