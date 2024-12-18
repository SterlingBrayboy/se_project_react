const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  // const handleLike = () => {

  // };

  return (
    <div className="card__area">
      <button className="card__like" onClick={() => onCardLike(item)}></button>
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
