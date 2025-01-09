import "./ItemCard.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(item);
  const isLiked = item.likes.some((like) => like === currentUser?._id);

  return (
    <div className="card__area">
      <button
        className="card__like"
        onClick={() => onCardLike(item, isLiked)}
      ></button>
      <img
        className="card__image"
        src={item.imageUrl}
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
