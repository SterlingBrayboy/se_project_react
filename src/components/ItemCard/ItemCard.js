import "./ItemCard.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(item);
  const isLiked = item.likes.some((like) => like === currentUser?._id);

  const cardLiked = `card__like ${isLiked ? "card__like" : "card__unlike"}`;

  return (
    <div className="card__area">
      <button
        className={cardLiked}
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
