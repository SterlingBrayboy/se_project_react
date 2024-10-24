const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  // const handleLike = () => {

  // };

  return (
    <div className="card__area">
      <img
        className="card__image"
        src={item.imageUrl}
        onClick={() => onSelectCard(item)}
        alt={item.name}
        onCardLike={onCardLike}
      />
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
