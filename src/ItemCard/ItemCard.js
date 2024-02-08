const ItemCard = ({ item }) => {
  return (
    <div>
      <div>
        <img className="card_image" src={item.link} />
      </div>
      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
