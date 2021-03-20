import logo from "./logo.svg";
import "./App.css";
import VideoChat from "./components/VideoChat"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Comuzo Video Service</h1>
      </header>
      <main>
        <VideoChat/>
      </main>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛
          </span>{" "}
          by <a href="#">eodev</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
