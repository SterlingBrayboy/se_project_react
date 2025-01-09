import React, { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  handleCloseModal,
  onClose,
  onSubmit,
  isOpen,
  onCreateModal,
  handleEditProfile,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // inside your EditProfileModal
  useEffect(() => {
    if (isOpen) {
      // only run this on open
      setName(currentUser?.name);
      setImageUrl(currentUser?.avatar);
    }
  }, [isOpen]); // this will run this code every time the isOpen value changes

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar: imageUrl });
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
          onChange={(e) => setName(e.target.value)}
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
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button type="submit" className="modal__save-changes-button">
        Save Changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
