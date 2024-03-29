import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ClothesSection = ({ clothingItems, onSelectCard }) => {
  const profileCards = clothingItems.filter(() => {
    return clothingItems;
  });

  return (
    <div className="card__items">
      {profileCards.map((item) => (
        <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
      ))}
    </div>
  );
};

export default ClothesSection;
