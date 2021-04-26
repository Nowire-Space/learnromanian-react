import React from "react";

import classes from './Title.css';

const title = (props) => (
    <h3 className={classes.Title}>{props.children}</h3>
);

export default title;