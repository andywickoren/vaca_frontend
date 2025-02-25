import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import Select from "react-select";

function TripModal({ handleSubmit, handleCloseClick, isOpen }) {
  const title = "New Trip";
  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "MX", label: "Mexico" },
    { value: "GB", label: "United Kingdom" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
    { value: "JP", label: "Japan" },
    { value: "CN", label: "China" },
    { value: "IN", label: "India" },
    { value: "AU", label: "Australia" },
  ];

  const states = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const [selectedState, setSelectedState] = useState(null);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <ModalWithForm
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      title={title}
    >
      <div className="modal__input-wrapper">
        <label htmlFor="email" className="modal__label">
          Trip Name
        </label>
        <input
          type="text"
          className="modal__input"
          id="trip"
          name="trip"
          placeholder="Name your trip"
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
          name="national-park"
          placeholder="National Park (optional)"
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
        <button
          type="submit"
          className="modal__submit modal__signin-btn"
          onClick={handleSubmit}
        >
          Upload Images
        </button>
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
