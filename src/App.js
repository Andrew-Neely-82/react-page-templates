import { Simple, Moderate, Complex } from "./components/index.js";
import { Navbar, Footer } from "./components/index.js";
import "./style.scss";

function App() {
  return (
    <div className="App_">
      <Navbar />
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
