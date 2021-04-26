import React from "react";

import classes from './FooterLogo.css';
import logoImage from '../../../../assets/images/logo_image.png'

const footerLogo = ( props ) => (
    <div className={classes.FooterLogo}>
        <img src={logoImage} alt="Logo"/>
    </div>
);

export default footerLogo;