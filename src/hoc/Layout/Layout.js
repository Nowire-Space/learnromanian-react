import React from 'react';

import classes from './Layout.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer/>
        </Aux>
        // <img src={logo} alt="Logo"/>
    );
}

export default layout;