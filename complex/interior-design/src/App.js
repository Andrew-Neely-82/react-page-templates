import { Collage, Contact, Designers, Footer, Heading, Packages, Services, Sidebar } from "./components/export.js";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App_" id="home">
        <div className="App_wrapper-left">
          <Sidebar />
        </div>
        <div className="App_wrapper-right">
          <Heading />
          <Collage />
          <Services />
          <Designers />
          <Packages />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
