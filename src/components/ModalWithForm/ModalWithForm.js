import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
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
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
