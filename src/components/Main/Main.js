import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const weatherType = useMemo(() => {
    if (
      (temp >= 70 && currentTemperatureUnit === "F") ||
      (temp >= 21.11 && currentTemperatureUnit === "C")
    ) {
      return "hot";
    } else if (
      (temp >= 60 && currentTemperatureUnit === "F") ||
      (temp >= 15.56 && currentTemperatureUnit === "C")
    ) {
      return "warm";
    } else if (
      (temp <= 45 && currentTemperatureUnit === "F") ||
      (temp >= 7.22 && currentTemperatureUnit === "C")
    ) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={temp} />
      <section id="card" className="card">
        <p className="card__caption">
          Today is {temp} {currentTemperatureUnit} / You may want to wear:
        </p>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item._id}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
