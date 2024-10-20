import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, location }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {/* <div>
          <Checkbox label="My Value" value={checked} onChange={handleChange} />
        </div> */}
        <div>
          <button
            type="text"
            className="header__button"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <Link className="header__name" to="/profile">
          Terrence Tegegne
        </Link>
        <div>
          <img
            src={avatar}
            className="header__avatar-logo"
            alt="avatar"
            onClick={onCreateModal}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
