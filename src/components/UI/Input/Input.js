import React from "react";

import classes from './Input.css';

const input = (props) => (
        <input
        className={classes.Input}
        type={props.inputType}
        placeholder={props.inputPlaceholder ? props.inputPlaceholder : null}
        defaultValue={props.children ? props.children : ''}
        required={props.required}/>
);

export default input;