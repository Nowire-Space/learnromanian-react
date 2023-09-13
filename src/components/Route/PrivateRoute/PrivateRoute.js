import React from "react";
import { Route, Redirect } from "react-router-dom";

import AccountService from '../../../services/AccountService';

const PrivateRoute = ({ component: Component, role, ...rest }) => (
    <Route {...rest} render={props => {
    const currentUser = AccountService.getCurrentUser();
    if (!currentUser) {
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
    if (role && role !== currentUser.role) {
        console.log("role does not match");
        return <Redirect to={{ pathname: '/forbidden'}} />
    }
        return <Component {...props} />
    }}/>
)

export default PrivateRoute;