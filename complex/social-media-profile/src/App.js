import { UpcomingEvents, Friend, Ads, Bug } from "./components/right/export.js";
import { Bio, Events, Interests, Hey } from "./components/left/export.js";
import { Share, Posts } from "./components/middle/export.js";
import { Navbar, Footer } from "./components/export.js";
import "./App.scss";

function App() {
  return (
    <div className="App_">
      <Navbar />
      <div className="App_content">
        <div className="App_content-left">
          <Bio />
          <br />
          <Events />
          <br />
          <Interests />
          <br />
          <Hey />
        </div>
        <div className="App_content-middle">
          <Share />
          <br />
          <Posts />
        </div>
        <div className="App_content-right">
          <UpcomingEvents />
          <br />
          <Friend />
          <br />
          <Ads />
          <br />
          <Bug />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
