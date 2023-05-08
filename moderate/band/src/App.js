import { components } from "./components";
import "./App.css";

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
