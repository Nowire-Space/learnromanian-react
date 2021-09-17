import React, {useContext} from 'react';

import classes from './NavigationItems.css';
import AuthContext from '../../../context/auth-context';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    const authContext = useContext(AuthContext);
    if (authContext.currentUser) {
        switch (authContext.currentUser.role) {
            case 'ROLE_ADMIN':
                return(
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/admin">Admin</NavigationItem>
                        <NavigationItem link="/profile">Profil</NavigationItem>
                        <NavigationItem
                            link="/login"
                            click={authContext.logOut}>Ieșire</NavigationItem>
                    </ul>
                );
            case 'ROLE_MODERATOR':
                return(
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/moderator">Moder</NavigationItem>
                        <NavigationItem link="/profile">Profil</NavigationItem>
                        <NavigationItem
                            link="/login"
                            click={authContext.logOut}>Ieșire</NavigationItem>
                    </ul>
                );
            case 'ROLE_PROFESSOR':
                return(
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/professor">Prof</NavigationItem>
                        <NavigationItem link="/profile">Profil</NavigationItem>
                        <NavigationItem
                            link="/login"
                            click={authContext.logOut}>Ieșire</NavigationItem>
                    </ul>
                );
            default:
                return(
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/student">Student</NavigationItem>
                        <NavigationItem link="/profile">Profil</NavigationItem>
                        <NavigationItem
                            link="/login"
                            click={authContext.logOut}>Ieșire</NavigationItem>
                    </ul>
                );
        }
    }else {
        return(
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/login">Autentificare</NavigationItem>
                <NavigationItem link="/registration">Înregistrare</NavigationItem>
                <NavigationItem link="/about">Despre noi</NavigationItem>
            </ul>
        );
    }
};

export default navigationItems;