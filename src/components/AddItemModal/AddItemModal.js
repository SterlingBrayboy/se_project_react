import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setimageUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setimageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  const [weather, setWeather] = useState("");
  const handleButtonChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Image
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <p className="modal__subtitle">Select the weather type:</p>
      <div>
        <div className="modal__radio-button">
          <label>
            {" "}
            <input
              className="modal__radio-button-icon"
              type="radio"
              id="hot"
              value="hot"
              name="button"
              onChange={handleButtonChange}
            />
            Hot
          </label>
        </div>
        <div className="modal__radio-button">
          <label>
            {" "}
            <input
              className="modal__radio-button-icon"
              type="radio"
              id="warm"
              value="warm"
              name="button"
              onChange={handleButtonChange}
            />
            Warm
          </label>
        </div>
        <div className="modal__radio-button">
          <label>
            {" "}
            <input
              className="modal__radio-button-icon"
              type="radio"
              id="cold"
              value="cold"
              name="button"
              onChange={handleButtonChange}
            />
            Cold
          </label>
        </div>
      </div>
      <button type="submit" className="modal__add-garment-button">
        Add Garment
      </button>
    </ModalWithForm>
  );
};

export default AddItemModal;
