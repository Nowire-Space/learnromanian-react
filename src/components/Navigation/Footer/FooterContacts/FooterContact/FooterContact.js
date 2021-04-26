import React from "react";

import classes from './FooterContact.css';

const footerContact = ( props ) => (
    <a className={classes.FooterContact}
       href={props.href}>
        {props.children}
    </a>
);

export default footerContact;