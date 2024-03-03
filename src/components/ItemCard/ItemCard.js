const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__area">
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
