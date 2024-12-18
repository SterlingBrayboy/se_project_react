import "./Header.css";
import logo from "../../images/logo.svg";
// import avatar from "../../images/avatar.svg";
import Avatar from "../Avatar/Avatar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useState } from "react";

const Header = ({
  onCreateModal,
  location,
  onLoginClick,
  onSignupClick,
  name,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const { currentUser } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [currentUser]);

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
        {isLoggedIn ? (
          <>
            <div>
              <button
                type="text"
                className="header__button"
                onClick={onCreateModal}
              >
                + Add clothes
              </button>
            </div>
            <p className="header__name">{name}</p>
            <Link className="header__avatar-logo" to="/profile">
              <img src={Avatar} alt="avatar" />
            </Link>
          </>
        ) : (
          <>
            <button className="header__signup" onClick={onSignupClick}>
              Sign Up
            </button>
            <button className="header__login" onClick={onLoginClick}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
