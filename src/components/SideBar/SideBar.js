import React, { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import "../Profile/Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onCreateModal, onLogoutClick }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="profile__info">
      <div className="profile__user">
        {/* <img className="profile__pic" /> */}
        <Avatar imageUrl={currentUser.avatar} name={currentUser.name} />
        <p className="profile__name">{currentUser.name}</p>
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
          onClick={onLogoutClick}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
