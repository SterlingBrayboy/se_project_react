import "./App.css";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Profile from "../Profile/Profile";
import Api from "../../utils/Api";
import Auth from "../../utils/auth";

const api = new Api({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

const auth = new Auth({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState([]);
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // OPEN MODAL

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  // CLOSE MODAL

  const handleCloseModal = () => {
    setActiveModal("");
  };

  // OPEN REGISTER MODAL

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  // OPEN LOGIN MODAL

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  // OPEN EDIT MODAL

  const handleEditModal = () => {
    setActiveModal("edit");
  };

  // TOGGLE BETWEEN THE MODALS

  const toggleModal = () => {
    setActiveModal((prevModal) =>
      prevModal === "register" ? "login" : "register"
    );
  };

  // PREVIEW CARD

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // ADD ITEM FORM SUBMIT

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    api
      .addItem({ name, imageUrl, weather })
      .then((res) => {
        setClothingItems([res.item, ...clothingItems]);
        console.log(res);
        handleCloseModal();
      })
      .catch(console.error);
  };

  // LIKE HANDLER

  const handleCardLike = ({ _id: id }, isLiked) => {
    const token = localStorage.getItem("jwt");
    // const isLiked = likes.some((like) => like === currentUser._id);
    // Check if this card is now liked
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch((err) => console.log(err));
  };

  // REGISTRATION HANDLER

  const handleRegistration = ({ name, avatar, email, password }) => {
    if (name && avatar && email && password) {
      auth
        .registerUser({ name, avatar, email, password })
        .then((res) => {
          handleCloseModal();
        })
        .catch((err) => console.error(err));
    }
  };

  // LOGIN HANDLER

  const handleLogin = ({ email, password }) => {
    if (email && password) {
      auth
        .loginUser({ email, password })
        .then((token) => {
          return auth.verifyToken(token);
        })
        .then((currentUser) => {
          setCurrentUser(currentUser);
          handleCloseModal();
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  };

  // LOGOUT HANDLER

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(currentUser === null);
    localStorage.removeItem("jwt");
  };

  // EDIT PROFILE HANDLER

  const handleEditProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    if (name && avatar) {
      api
        .editUser(token, name, avatar)
        .then((res) => {
          handleCloseModal();
          setCurrentUser({ name, avatar });
        })
        .catch((err) => console.error(err));
    }
  };

  // TEMPERATURE CHANGE HANDLER

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  // DELETE ITEM SUBMIT HANDLER

  const deleteItemSubmit = () => {
    api
      .deleteItem(selectedCard._id)
      .then(() => {
        const newClothingItems = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setClothingItems(res);
        console.log(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      // Call a function to verify the token
      auth
        .verifyToken(token)
        .then((user) => {
          // Handle successful verification
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onLoginClick={handleLoginModal}
            onSignupClick={handleRegisterModal}
            location={temp.location}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleCardLike}
              />
            </Route>
            <Route path="/profile">
              {isLoggedIn ? (
                <Redirect to="/profile" />
              ) : (
                <Redirect to="/login" />
              )}
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                onEditClick={handleEditModal}
                onLogoutClick={handleLogout}
                handleCardLike={handleCardLike}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
              // onCreateModal={handleCreateModal}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={deleteItemSubmit}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register"}
              handleRegistration={handleRegistration}
              onCreateModal={handleRegisterModal}
              onLoginClick={toggleModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
              onCreateModal={handleLoginModal}
              onSignUpClick={toggleModal}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "edit"}
              handleEditProfile={handleEditProfile}
              onSubmit={handleEditProfile}
              onCreateModal={handleEditModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
