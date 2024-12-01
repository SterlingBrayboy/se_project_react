import React from "react";
// import avatar from "../../images/avatar.svg";
import Avatar from "../Avatar/Avatar";
import "../Profile/Profile.css";

const SideBar = ({ onCreateModal, handleLogout }) => {
  return (
    <div className="profile__info">
      <div className="profile__user">
        <img className="profile__pic" src={Avatar} alt="avatar" />
        <p className="profile__name">Terrence Tegegne</p>
      </div>
      <div className="profile__user-buttons">
        <button
          type="button"
          className="profile__edit-button"
          onClick={onCreateModal}
        >
          Change Profile Data
        </button>
        <button
          type="button"
          className="profile__logout-button"
          onLogoutClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
