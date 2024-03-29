import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 30;
  const weatherType = useMemo(() => {
    if (weatherTemp?.temperature?.[currentTemperatureUnit] >= 70) {
      return "hot";
    } else if (
      weatherTemp?.temperature?.[currentTemperatureUnit] >= 50 &&
      weatherTemp <= 85
    ) {
      return "warm";
    } else if (weatherTemp?.temperature?.[currentTemperatureUnit] <= 45) {
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
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
