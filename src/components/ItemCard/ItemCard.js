import "./ItemCard.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = item.owner === currentUser._id;
  const isLiked =
    item.likes && item.likes.some((like) => like === currentUser?._id);

  // Determine visibility of the like button based on ownership
  const cardLikeVisible = isOwn ? "card__like_visible" : "card__like_hidden";

  // Determine the style of the like button based on whether it's liked
  const cardLiked = isLiked ? "card__like" : "card__unlike";

  return (
    <div className="card__area">
      <button
        className={`${cardLikeVisible} ${cardLiked}`}
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
