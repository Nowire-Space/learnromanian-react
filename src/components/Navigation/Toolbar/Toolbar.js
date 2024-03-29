import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.DrawerToggle}>
            <DrawerToggle className={classes.DrawerToggle}
                          menuButtonClicked={props.menuButtonClicked}/>
        </div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <div className={classes.RightSide}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;