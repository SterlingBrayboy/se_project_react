// import React, { useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";

// const LoginModal = ({ handleCloseModal, onAddItem, isOpen }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleNameChange = (e) => {
//     console.log(e.target.value);
//     setName(e.target.value);
//     setPassword(e.target.value);
//     setEmail(e.target.value);
//     setAvatar(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddItem({ email, password });
//   };

//   return (
//     <ModalWithForm
//       title="Log In"
//       onClose={handleCloseModal}
//       isOpen={isOpen}
//       onSubmit={handleSubmit}
//     >
//       <label>
//         Email
//         <input
//           className="modal__input"
//           type="email"
//           name="email"
//           minLength="1"
//           maxLength="30"
//           placeholder="Email"
//           value={email}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Password
//         <input
//           className="modal__input"
//           type="password"
//           name="password"
//           minLength="1"
//           placeholder="Password"
//           value={password}
//         />
//       </label>
//     </ModalWithForm>
//   );
// };

// export default LoginModal;
