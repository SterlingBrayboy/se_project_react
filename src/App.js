import "./App.css";
import Header from "./Header/Header";
// import WeatherCard from "./WeatherCard/WeatherCard";
// import ItemCard from "./ItemCard/ItemCard";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const weatherTemp = "75";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
    </div>
  );
}

export default App;
