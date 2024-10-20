import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../AddItemModal/AddItemModal";
// import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
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
  // const [currentUser, setCurrentUser] = useState("");
  const [clothingItems, setClothingItems] = useState([]);

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
    setActiveModal("create");
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
    const token = localStorage.setItem("jwt");

    if (token) {
      // Call a function to verify the token
      auth
        .verifyToken(token)
        .then((user) => {
          // Handle successful verification
          auth.registerUser(user);
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
              />
            </Route>
            <Route path="/profile">
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={deleteItemSubmit}
            />
          )}
          {activeModal === "create" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onCreateModal={handleRegisterModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
