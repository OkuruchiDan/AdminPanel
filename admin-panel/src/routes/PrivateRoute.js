import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRouteComponent = ({component: Component,authenticated, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            authenticated ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.loginReducer.authenticated,
    }
}

export const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteComponent);