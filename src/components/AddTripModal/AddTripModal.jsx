import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import Select from "react-select";
import ImageModalUploadIcon from "../../assets/ImageModalUploadIcon.svg";
import { states } from "../../constants/states";
import { countries } from "../../constants/countries";
import { addTrip } from "../../api";
import { formatDate } from "../../utils/dateUtils";

function AddTripModal({ handleCloseClick, isOpen, handleAddTrip }) {
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

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString();

    const formattedTripName = formData.tripName
      .toLowerCase()
      .replace(/\s+/g, "-");

    const form = new FormData();
    form.append("tripName", formData.tripName);
    form.append("nationalPark", formData.nationalPark);
    form.append("state", formData.state);
    form.append("country", formData.country);
    form.append("tripSlug", formattedTripName);
    form.append("date", currentDate);

    formData.images.forEach((image) => {
      form.append("images", image);
    });

    try {
      const response = await fetch("http://localhost:5001/trips", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to add trip");
      }

      const savedTrip = await response.json();
      handleAddTrip(savedTrip);
      setFormData({
        tripName: "",
        tripSlug: "",
        nationalPark: "",
        state: "",
        country: "",
        images: [],
        date: "",
      });
      handleCloseClick();
    } catch (error) {
      console.error("Error adding trip:", error);
    }
  };

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
        <label htmlFor="tripName" className="modal__label">
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
        />
      </div>
      <div className="modal__input-wrapper">
        <label htmlFor="nationalPark" className="modal__label">
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
        />
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
      </div>
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
      <button type="submit" className="modal__submit modal__signin-btn">
        <p className="modal__signin-btn-txt">Submit</p>
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
    </ModalWithForm>
  );
}

export default AddTripModal;
