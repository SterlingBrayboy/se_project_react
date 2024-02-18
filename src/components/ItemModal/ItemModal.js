import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  // console.log("ItemModal");

  return (
    <div className={`modal`}>
      <div className="modal__content-item">
        <button
          className="modal__close-item"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__content-image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__description">
          <div className="modal__content-name"> {selectedCard.name} </div>
          <div className="modal__content-type">
            {" "}
            Weather Type: {selectedCard.weather}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
