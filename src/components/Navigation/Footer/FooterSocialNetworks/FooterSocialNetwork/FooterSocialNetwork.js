import React from "react";

import classes from './FooterSocialNetwork.css';

const footerSocialNetwork = ( props ) => (
    <div className={classes.FooterSocialNetwork}>
        {props.children}
    </div>
);

export default footerSocialNetwork;