import React from "react";
import avatar from "../../images/avatar.svg";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile__pic" src={avatar} alt="avatar" />
      <p className="profile__name">Terrence Tegegne</p>
      <p>Your Items</p>
      <button type="button" className="profile__add-button">
        + Add new
      </button>
      <ClothesSection />
    </div>
  );
};

export default Profile;
