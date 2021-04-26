import React from "react";

import classes from './FooterNav.css';

const footerNav = ( props ) => (
    <ul className={classes.FooterNav}>
        {props.children}
    </ul>
);

export default footerNav;