import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  handleCloseModal,
  onAddItem,
  isOpen,
  onCreateModal,
  handleEditProfile,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleAvatarChange = (e) => {
    console.log(e.target.value);
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
      onClick={onCreateModal}
    >
      <label>
        Name *
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
        Avatar URL *
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
      <button type="submit" className="modal__save-changes-button">
        Save Changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
