import "./App.css";
import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={true} type="sunny" />
        <section id="card">card</section>
      </main>
    </div>
  );
}

export default App;
