import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  // console.log("Header");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="header__date">{currentDate}, New York</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            className="header__button"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <p>Terrence Tegegne</p>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
