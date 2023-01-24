import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Cakecontainer from "./components/Cakecontainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cakecontainer />
      </div>
    </Provider>
  );
}

export default App;
