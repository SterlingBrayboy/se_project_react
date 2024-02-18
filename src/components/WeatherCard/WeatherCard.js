import { weatherOptions } from "../../utils/constants";
import "./WeatherCard.css";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} alt="weather banner" className="weather__mural" />
    </section>
  );
};

export default WeatherCard;
