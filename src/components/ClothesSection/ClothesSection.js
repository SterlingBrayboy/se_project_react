import React from "react";
import ItemCard from "../ItemCard/ItemCard";
// import { useMemo, useContext } from "react";
// import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ClothesSection = ({ clothingItems, onSelectCard, onCardLike }) => {
  const profileCards = clothingItems;

  return (
    <div className="card__items">
      {profileCards.map((item) => (
        <ItemCard
          item={item}
          onSelectCard={onSelectCard}
          onClick={onCardLike}
          key={item._id}
        />
      ))}
    </div>
  );
};

export default ClothesSection;
