import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  //   const [imageUrl, setimageUrl] = useState("");
  //   const handleUrlChange = (e) => {
  //     console.log(e.target.value);
  //     setimageUrl(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, avatar, email, password });
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          value={email}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          minLength="1"
          placeholder="Password"
          value={password}
        />
      </label>
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
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          placeholder="Avatar URL"
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
