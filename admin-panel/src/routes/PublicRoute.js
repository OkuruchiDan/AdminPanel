import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";

const PublicRouteComponent = ({component: Component,authenticated, restricted, ...rest}) => {
    console.log(authenticated, " authenticated");
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            authenticated ?
                <Redirect to="/panel" />
                : <Component {...props} />
        )} />
    );
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.loginReducer.authenticated,
    }
}

export const PublicRoute = connect(mapStateToProps, null)(PublicRouteComponent);