import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/login">Autentificare</NavigationItem>
        <NavigationItem link="/registration">Înregistrare</NavigationItem>
        <NavigationItem link="/about">Despre noi</NavigationItem>
    </ul>
);

export default navigationItems;