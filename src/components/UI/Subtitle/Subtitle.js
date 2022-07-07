import React from "react";

import classes from './Subtitle.css';

const subTitle = (props) => (
    <h6 className={classes.Subtitle}>{props.children}</h6>
);

export default subTitle;