import "./WeatherCard.css";

const WeatherCard = () => {
  console.log("Weather Card");

  return (
    <section className="weather" id="weather">
      <div className="weather__info">75F</div>
      <img src="./images/day/sunny.svg" className="weather__mural" />
    </section>
  );
};

export default WeatherCard;
