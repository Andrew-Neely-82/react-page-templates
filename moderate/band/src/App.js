import { components } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {components.map((Component) => {
        return <Component />;
      })}
    </div>
  );
}

export default App;
