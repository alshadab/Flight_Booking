import { Provider } from "react-redux";
import Main from "./Components/Main";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
