import "./ModalWithForm.css";

const ModalWithForm = ({ children, buttonText = "Add garment", title }) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${"id"}`}>
      <div className="modal__content">
        <form>
          <button type="button" onClick={"onClose"} />
          <h3> {title} </h3>
          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
