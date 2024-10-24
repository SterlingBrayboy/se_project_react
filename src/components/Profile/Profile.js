import React from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({ clothingItems, onSelectCard, onCreateModal }) => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile__options">
        <p className="profile__items">Your Items</p>
        <button
          type="button"
          className="profile__add-button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="profile__account-options">
        <button
          type="button"
          className="profile__edit-button"
          // onClick={onCreateModal}
        >
          Change Profile Data
        </button>
        <button
          type="button"
          className="profile__signout-button"
          // onClick={onCreateModal}
        >
          Sign Out
        </button>
      </div>
      <div className="profile__cards">
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
        />
      </div>
    </div>
  );
};

export default Profile;
