import { Navbar, LeftBar, Section, Pagination, Footer } from "./components/export";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <LeftBar />
        <div className="sections">
          <Section />
          <Pagination />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
