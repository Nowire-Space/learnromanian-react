import React from "react";

import classes from './SideDrawer.css';
import LogoImage from '../../LogoImage/LogoImage';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = ( props ) => {
    let attachedSideDrawerClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attachedSideDrawerClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop
                show={props.show}
                clicked={props.closeClicked}/>
            <div className={attachedSideDrawerClasses.join(' ')}>
                <div className={classes.Logo}>
                    <LogoImage/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;