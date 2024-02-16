const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card_area">
      <div>
        <img
          className="card_image"
          src={item.link}
          onClick={() => onSelectCard(item)}
        />
        <div className="card_name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
