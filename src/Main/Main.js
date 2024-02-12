import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section id="card" className="card_section">
        Today is {weatherTemp} F / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
