const ItemCard = ({ x }) => {
  return (
    <div>
      <div>
        <img className="card_image" src={x.link} />
      </div>
      <div className="card_name">{x.name}</div>
    </div>
  );
};

export default ItemCard;
