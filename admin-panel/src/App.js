import logo from './logo.svg';
import './App.css';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Panel} from "./pages/Panel/Panel";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>

                        <Route path="/login" component={LoginPage}/>
                        <Route path="/panel" component={Panel}/>
                        <Redirect from={"/"} to={"/login"}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
