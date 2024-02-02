import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div>Date</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button type="text">Add New Clothes</button>
          </div>
          <div>Name</div>
          <div>
            <img src="/images/avatar.svg" alt="avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
