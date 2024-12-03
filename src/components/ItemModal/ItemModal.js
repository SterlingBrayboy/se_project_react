import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;

  const modalContentDelete = `modal__content-delete ${
    isOwn ? "modal__content-delete_visible" : "modal__content-delete_hidden"
  }`;
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
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__description">
          <div className="modal__content-name">
            {" "}
            {selectedCard.name}
            <button
              type="button"
              className={modalContentDelete}
              onClick={onDelete}
            >
              Delete item
            </button>
          </div>
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
