import React from "react";
import { Route, Redirect } from "react-router-dom";

import AuthService from '../../../services/AuthService';

const DefaultRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
        return <Redirect to={{ pathname: '/login' }} />
    }
    return <Redirect to={{ pathname: '/profile' }} />
    }}/>
)

export default DefaultRoute;