import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

function App() {
  const weatherTemp = "110";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        console.log(temperature);
        setTemp(temperature);
      })
      .catch(console.error);
  }, []);
  console.log(temp);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} temp={temp} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} temp={temp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <label>
            Name
            <input
              className="modal__input"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
            />
          </label>
          <label>
            Image
            <input
              className="modal__input"
              type="url"
              name="link"
              minLength="1"
              maxLength="30"
              placeholder="Image URL"
            />
          </label>
          <p className="modal__subtitle">Select the weather type:</p>
          <div>
            <div className="modal__radio-button">
              <label>
                {" "}
                <input
                  className="modal__radio-button-icon"
                  type="radio"
                  id="hot"
                  value="hot"
                  name="button"
                />
                Hot
              </label>
            </div>
            <div className="modal__radio-button">
              <label>
                {" "}
                <input
                  className="modal__radio-button-icon"
                  type="radio"
                  id="warm"
                  value="warm"
                  name="button"
                />
                Warm
              </label>
            </div>
            <div className="modal__radio-button">
              <label>
                {" "}
                <input
                  className="modal__radio-button-icon"
                  type="radio"
                  id="cold"
                  value="cold"
                  name="button"
                />
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
