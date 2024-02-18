import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  // console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    // console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });
  // console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section id="card" className="card">
        Today is {weatherTemp}°F / You may want to wear:
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
