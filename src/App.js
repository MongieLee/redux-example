import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import Home from "./components/Home";
import Tets from "./components/Test";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Home />
          <hr />
          <Tets />
        </header>
      </div>
    </Provider>
  );
}

export default App;
