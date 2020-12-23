import logo from './logo.svg';
import './App.css';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <LoginPage/>
          </div>
      </Provider>
  );
}

export default App;
