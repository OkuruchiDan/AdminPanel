import React from "react";
import {TabsContainer} from "../../containers/TabsContainer";
import {Redirect, Switch} from "react-router-dom";
import {Dashboard} from "../Dashboard/Dashboard";
import {ProductsContainer} from "../Products/ProductsContainer";
import {Suppliers} from "../Suppliers/Suppliers";
import {Settings} from "../Settings/Settings";
import {Errors} from "../Errors/Errors";
import {PublicRoute} from "../../routes/PublicRoute";
import {PrivateRoute} from "../../routes/PrivateRoute";

export const Panel = () => {
    return (
        <div style={{padding: "20px 0px", width: "100%"}}>
            <TabsContainer/>
            <Switch>
                <PrivateRoute path="/panel/dashboard" component={Dashboard}/>
                <PrivateRoute path="/panel/products" component={ProductsContainer}/>
                <PrivateRoute path="/panel/suppliers" component={Suppliers}/>
                <PrivateRoute path="/panel/settings" component={Settings}/>
                <PrivateRoute path="/panel/errors" component={Errors}/>
                <Redirect from={'/'} to={'/panel/dashboard'}/>

            </Switch>
        </div>
    );
};
