import React from "react";
import avatar from "../../images/avatar.svg";
import "../Profile/Profile.css";

const SideBar = () => {
  return (
    <div className="profile__info">
      <img className="profile__pic" src={avatar} alt="avatar" />
      <p className="profile__name">Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;
