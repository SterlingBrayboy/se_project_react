import React, { useState } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  handleEditModal,
  onLogoutClick,
  onEditClick,
  handleCardLike,
}) => {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="profile">
      <SideBar onCreateModal={onEditClick} onClick={onLogoutClick} />
      <div className="profile__items">
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
          onCardLike={handleCardLike}
        />
      </div>
    </div>
  );
};

export default Profile;
