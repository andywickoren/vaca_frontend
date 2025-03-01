import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import Select from "react-select";
import ImageModalUploadIcon from "../../assets/ImageModalUploadIcon.svg";
import { states } from "../../constants/states";
import { countries } from "../../constants/countries";

function TripModal({ handleCloseClick, isOpen, handleAddTrip }) {
  const title = "New Trip";

  const [formData, setFormData] = useState({
    tripName: "",
    tripSlug: "",
    nationalPark: "",
    state: "",
    country: "",
    images: [],
    date: "",
  });

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      images: Array.from(event.target.files),
    }));
  };

  const [selectedFiles, setSelectedFiles] = useState([]);

  //   const handleFileChange = (event) => {
  //     setSelectedFiles(Array.from(event.target.files));
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString();
    const formatDate = (isoDateString) => {
      const date = new Date(isoDateString);
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
    };

    const formattedDate = formatDate(currentDate);
    console.log("FORMATTED DATE: ", formattedDate);

    const formattedTripName = formData.tripName
      .toLowerCase()
      .replace(/\s+/g, "-");

    const newCard = {
      tripName: formData.tripName,
      nationalPark: formData.nationalPark,
      state: formData.state,
      country: formData.country,
      tripSlug: formattedTripName,
      date: formattedDate,
      images: formData.images.map((file) => URL.createObjectURL(file)),
    };

    handleAddTrip(newCard);

    setFormData({
      tripName: "",
      nationalPark: "",
      state: "",
      country: "",
      images: [],
      date: formattedDate,
    });

    handleCloseClick();
  };

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      state: selectedOption ? selectedOption.value : "",
    }));
  };

  return (
    <ModalWithForm
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      title={title}
      formData={formData}
      handleSubmit={handleSubmit}
    >
      <div className="modal__input-wrapper">
        <label htmlFor="email" className="modal__label">
          Trip Name
        </label>
        <input
          type="text"
          className="modal__input"
          id="trip"
          name="tripName"
          placeholder="Name your trip"
          onChange={handleChange}
          value={formData.tripName}
          //   value={trip}
          //   onChange={handleTripNameChange}
        />
        <span className="modal__error-message modal__error-message_type_trip">
          {/* {tripError} */}
        </span>
      </div>
      <div className="modal__input-wrapper">
        <label htmlFor="username" className="modal__label">
          National Park
        </label>
        <input
          type="text"
          className="modal__input"
          id="national-park"
          name="nationalPark"
          placeholder="National Park (optional)"
          onChange={handleChange}
          value={formData.nationalPark}
          //   value={national - park}
          //   onChange={handleStateChange}
        />
        <span className="modal__error-message modal__error-message_type_username">
          {/* {nation-park-error} */}
        </span>
      </div>

      <div className="modal__input-wrapper">
        <label htmlFor="country" className="modal__label">
          Country
        </label>
        <Select
          id="country"
          name="country"
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Select a country"
          className="modal__select"
          classNamePrefix="modal-select"
          isSearchable
        />

        <span className="modal__error-message modal__error-message_type_password">
          {/* {countryError} */}
        </span>
      </div>
      <div className="modal__input-wrapper">
        <label htmlFor="state" className="modal__label">
          State
        </label>
        <Select
          id="state"
          name="state"
          options={states}
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Select a state"
          className="modal__select"
          classNamePrefix="modal-select"
          isSearchable
        />
        <span className="modal__error-message modal__error-message_type_state">
          {/* {stateError} */}
        </span>
      </div>

      <div className="modal__buttons-wrapper">
        {/* <span className="modal__error-message_type_register-error">
          {submissionError}
        </span> */}
        <div className="modal__file-input-container">
          <input
            type="file"
            id="image-upload"
            name="images"
            multiple
            className="modal__file-input"
            onChange={handleFileChange}
          />
          <label htmlFor="image-upload" className="modal__file-label">
            <p className="modal__signin-btn-txt">Upload Images</p>
            <img
              src={ImageModalUploadIcon}
              alt=""
              className="modal__image-modal-upload-icon"
            />
          </label>
        </div>

        <button
          type="submit"
          className="modal__submit modal__signin-btn"
          onClick={handleSubmit}
        >
          <p className="modal__signin-btn-txt">Submit</p>
          {/* <img
            src={ImageModalUploadIcon}
            alt=""
            className="modal__image-modal-upload-icon"
          /> */}
        </button>
        {formData.images.length > 0 && (
          <div className="modal__image-previews">
            {formData.images.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt="Selected"
                className="modal__image-preview"
              />
            ))}
          </div>
        )}
        {/* <button
          type="button"
          className="modal__or-signup-btn"
          //   onClick={openSigninModal}
        >
          <span className="modal__or">or </span>
          <span className="modal__signup">Sign in</span>
        </button> */}
      </div>
    </ModalWithForm>
  );
}

export default TripModal;
