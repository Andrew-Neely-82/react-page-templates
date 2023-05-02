import { Header, Article1, Article2, Bio, Posts, Tags, Footer } from "./components/export.js";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App_">
        <Header />
        <div className="App_main-content">
          <div className="App_left-side">
            <Article1 />
            <hr />
            <Article2 />
          </div>
          <div className="App_right-side">
            <Bio />
            <hr />
            <Posts />
            <hr />
            <Tags />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
