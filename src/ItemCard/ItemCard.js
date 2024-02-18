const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__area">
      <img
        className="card__image"
        src={item.link}
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
