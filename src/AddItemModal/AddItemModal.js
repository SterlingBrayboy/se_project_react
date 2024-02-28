import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
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
          maxLength="30"
          placeholder="Image URL"
          value={link}
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
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;