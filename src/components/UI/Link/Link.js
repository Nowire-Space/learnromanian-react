import React from "react";

import classes from './Link.css';

const link = (props) => (
    <a className={classes.Link}
       href={props.href}>{props.children}</a>
);

export default link;