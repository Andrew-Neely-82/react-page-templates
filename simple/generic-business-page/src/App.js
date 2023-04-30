import { Navbar, Start, Section1, Section2, Quote, Socials, Footer } from "./components/export";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Start />
      <Section1 />
      <Section2 />
      <Quote />
      <div className="App__footer-container">
        <Socials />
        <Footer />
      </div>
    </>
  );
}

export default App;
