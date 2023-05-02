import { Nav, About, Work, Resume, Info, Contact, Footer } from "./components/export.js";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App__content">
        <Nav />
        <About />
        <Work />
        <Resume />
        <Info />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
