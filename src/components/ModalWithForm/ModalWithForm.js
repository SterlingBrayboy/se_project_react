import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  // buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  // secondaryButton,
}) => {
  // console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <form onSubmit={onSubmit} className="modal__form">
          <button className="modal__close" type="button" onClick={onClose} />
          <h3 className="modal__title"> {title} </h3>
          {children}
          {/* <div className="modal__button-div"> */}
          {/* <button type="submit" className="modal__button">
            {buttonText}
          </button> */}
          {/* {secondaryButton && (
              <button type="submit" className="modal__button">
                {secondaryButton}
              </button>
            )}
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
