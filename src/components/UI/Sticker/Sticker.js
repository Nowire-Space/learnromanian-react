import React from "react";

import classes from './Sticker.css';

const sticker = (props) => (
    <div className={ classes.Sticker }>
            { props.children }
    </div>
)

export default sticker;