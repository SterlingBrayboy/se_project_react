import React from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({ clothingItems, onSelectCard, onCreateModal }) => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile__options">
        <p>Your Items</p>
        <button
          type="button"
          className="profile__add-button"
          onClick={onCreateModal}
        >
          + Add new
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
