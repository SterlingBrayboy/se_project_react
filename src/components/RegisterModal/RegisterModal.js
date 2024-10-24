import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  onAddItem,
  isOpen,
  handleRegistration,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleAvatarChange = (e) => {
    console.log(e.target.value);
    setAvatar(e.target.value);
  };

  //   const [imageUrl, setimageUrl] = useState("");
  //   const handleUrlChange = (e) => {
  //     console.log(e.target.value);
  //     setimageUrl(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ name, avatar, email, password });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      <label>
        Email *
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Password *
        <input
          className="modal__input"
          type="password"
          name="password"
          minLength="1"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
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
    </ModalWithForm>
  );
};

export default RegisterModal;
