import { Collage, Contact, Designers, Footer, Heading, Packages, Services, Sidebar } from "./components/export.js";
import "./App.scss";

function App() {
  return (
    <div className="App_">
      <Sidebar />
      <Heading />
      <Collage />
      <Services />
      <Designers />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
