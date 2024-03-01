import { weatherOptions } from "../../utils/constants";
import "./WeatherCard.css";
import {
  CurrentTemperatureUnitContext,
  currentTemperateUnit,
} from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <CurrentTemperatureUnitContext.Provider
        value={weatherTemp.temperature[currentTemperateUnit]}
      >
        <div className="weather__info">{weatherTemp}°F</div>
        <img
          src={imageSrcUrl}
          alt="weather banner"
          className="weather__mural"
        />
      </CurrentTemperatureUnitContext.Provider>
    </section>
  );
};

export default WeatherCard;
