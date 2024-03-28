import { weatherOptions } from "../../utils/constants";
import "./WeatherCard.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather" id="weather">
      {/* <CurrentTemperatureUnitContext.Provider */}
      {/* value={CurrentTemperatureUnitContext[currentTemperatureUnit]}
      > */}
      <div className="weather__info">
        {weatherTemp} {currentTemperatureUnit}
      </div>
      <img src={imageSrcUrl} alt="weather banner" className="weather__mural" />
      {/* </CurrentTemperatureUnitContext.Provider> */}
    </section>
  );
};

export default WeatherCard;
