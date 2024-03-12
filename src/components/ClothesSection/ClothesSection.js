import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ClothesSection = ({ weatherTemp, clothingItems, onSelectCard }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherType = useMemo(() => {
    if (weatherTemp?.temperature?.[currentTemperatureUnit] >= 86) {
      return "hot";
    }
  }, [weatherTemp]);

  const profileCards = clothingItems.filter(() => {
    return clothingItems;
  });

  console.log(profileCards);

  return (
    <div>
      <div className="card__items">
        {profileCards.map((item) => (
          <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
