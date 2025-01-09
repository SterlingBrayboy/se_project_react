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

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setImageUrl(currentUser.avatar);
    }
  }, [currentUser]);

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
    // onSubmit({ name, imageUrl });
    onSubmit({ name, avatar: imageUrl });
  };

  // const handleNameChange = (e) => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };
  // const handleAvatarChange = (e) => {
  //   console.log(e.target.value);
  //   setAvatar(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleEditProfile({ name, avatar });
  // };

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
          // onChange={handleNameChange}
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
          // onChange={handleAvatarChange}
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
