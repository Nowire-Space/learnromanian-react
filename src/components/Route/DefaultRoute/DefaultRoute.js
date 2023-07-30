import React from "react";
import { Route, Redirect } from "react-router-dom";

import AccountService from '../../../services/AccountService';

const DefaultRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
    const currentUser = AccountService.getCurrentUser();
    if (!currentUser) {
        return <Redirect to={{ pathname: '/about' }} />
    }
    return <Redirect to={{ pathname: '/profile' }} />
    }}/>
)

export default DefaultRoute;