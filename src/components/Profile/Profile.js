import React from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

const Profile = ({ clothingItems, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile__options">
        <p>Your Items</p>
        <button type="button" className="profile__add-button">
          + Add new
        </button>
      </div>
      <div className="profile__cards">
        <ClothesSection
          // item={item}
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          // key={item._id}
        />
      </div>
    </div>
  );
};

export default Profile;
