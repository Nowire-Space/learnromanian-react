import React from "react";

const authContext = React.createContext({
    authenticated: false,
    currentUser: undefined,
    updateUser: () => {},
    logOut: () => {}
});

export default authContext;