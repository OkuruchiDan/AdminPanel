import './App.css';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Panel} from "./pages/Panel/Panel";
import {PrivateRoute} from "./routes/PrivateRoute";
import {PublicRoute} from "./routes/PublicRoute";

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Switch>
                        <PrivateRoute path="/panel" component={Panel}/>
                        <PublicRoute path="/login" component={LoginPage}/>
                        <Redirect from={"/"} to={"/login"}/>
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
