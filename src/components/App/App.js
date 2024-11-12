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
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState([]);
  const [clothingItems, setClothingItems] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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

  // PREVIEW CARD

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // ADD ITEM FORM SUBMIT

  const handleAddItemSubmit = (item) => {
    api
      .addItem(item)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        console.log(item);
        handleCloseModal();
      })
      .catch(console.error);
  };

  // LIKE HANDLER

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is now liked
    isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  // REGISTRATION HANDLER

  const HandleRegistration = ({ name, avatar, email, password }) => {
    if (name && avatar && email && password) {
      auth
        .registerUser({ name, avatar, email, password })
        .then(() => {
          handleCloseModal();
        })
        .catch((err) => console.error(err));
    }
  };

  // LOGIN HANDLER

  const HandleLogin = ({ email, password }) => {
    if (email && password) {
      auth
        .loginUser({ email, password })
        .then(() => {
          handleCloseModal();
        })
        .catch((err) => console.error(err));
    }
  };

  // EDIT PROFILE HANDLER

  const HandleEditProfile = ({ name, avatar }) => {
    if (name && avatar) {
      api
        .editUser({ name, avatar })
        .then(() => {
          handleCloseModal();
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
    const token = auth._addToStorage;

    if (token) {
      // Call a function to verify the token
      auth
        .verifyToken(token)
        .then((user) => {
          // Handle successful verification
          setCurrentUser(user);
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
          <Header onCreateModal={handleCreateModal} location={temp.location} />
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
              {/* {isLoggedIn ? (
                <Redirect to="/profile" />
              ) : (
                <Redirect to="/login" />
              )} */}
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                onEditClick={handleEditModal}
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
              handleRegistration={HandleRegistration}
              onCreateModal={handleRegisterModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              HandleLogin={HandleLogin}
              onCreateModal={handleLoginModal}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "edit"}
              HandleEditProfile={HandleEditProfile}
              onCreateModal={handleEditModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
