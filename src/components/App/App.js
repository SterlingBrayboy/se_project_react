import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
// import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import Api from "../../utils/Api";
// import ClothesSection from "../ClothesSection/ClothesSection";

function App() {
  // const weatherTemp = "110";
  // const myStyle = {
  //   backgroundColor: "#F3F3F3",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "repeat",
  //   // height: "100vh",
  // };
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (values) => {
    console.log(values);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleAddItemSubmit = (item) => {
    // your function may be named differently
    api
      .addItem(item)
      // use res with setClothingItems
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        // name:,
        // imageUrl:,
        // weather: weather,
      });
  };

  // const deleteItemSubmit = (item) => {
  //   setClothingItems([item, ...clothingItems]).remove;
  // };

  const api = new Api({
    baseUrl: "http://localhost:3001",
    // headers: {
    //   authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
    //   "Content-Type": "application/json",
    // },
  });

  api.getCards().then((res) => {
    setClothingItems(res);
  });

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        console.log(temperature);
        setTemp(temperature);
      })
      .catch(console.error);
  }, []);
  console.log(currentTemperatureUnit);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} temp={temp} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              // temp={temp}
            />
          </Route>
          <Route path="/profile">
            <Profile clothingItems={clothingItems} />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
