import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ clothingItems, onSelectCard, onCardLike }) => {
  const profileCards = clothingItems;

  return (
    <div className="card__items">
      {profileCards.map((item) => (
        <ItemCard
          item={item}
          onSelectCard={onSelectCard}
          onCardLike={onCardLike}
          key={item._id}
        />
      ))}
    </div>
  );
};

export default ClothesSection;
