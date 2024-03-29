import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

const Header = ({ onCreateModal, temp }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  console.log(temp);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {temp}
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
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
