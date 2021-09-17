import React from "react";

import classes from './PropagateLoader.css';

import {PropagateLoader} from "react-spinners";

const propagateLoader = (props) => (
    <div className={classes.PropagateLoader}>
        <PropagateLoader
            loading={true}
            speedMultiplier={1.5}
            color={"#ffffff"}/>
    </div>
);

export default propagateLoader;