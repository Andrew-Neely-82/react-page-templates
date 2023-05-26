import { Simple, Moderate, Complex } from "./components/index.js";
import { Navbar, Footer } from "./components/index.js";
import "./style.scss";

function App() {
  return (
    <div className="App_">
      <Navbar />
      <h1>Some of these Templates are still a work in progress!</h1>
      <div className="Sections_">
        <Simple />
        <Moderate />
        <Complex />
      </div>
      <Footer />
    </div>
  );
}

export default App;
