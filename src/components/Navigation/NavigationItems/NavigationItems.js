import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Autentificare</NavigationItem>
        <NavigationItem link="/">Înregistrare</NavigationItem>
        <NavigationItem link="/">Despre noi</NavigationItem>
    </ul>
);

export default navigationItems;