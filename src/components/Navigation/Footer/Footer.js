import React from "react";

import classes from './Footer.css';
// import { IconContext } from 'react-icons';
// import { FaMapMarkerAlt } from 'react-icons/fa/';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterNav from './FooterNav/FooterNav';
import FooterSocialNetworks from './FooterSocialNetworks/FooterSocialNetworks';
import FooterContacts from './FooterContacts/FooterContacts';

const footer = ( props ) => (
    <footer className={ classes.Footer }>
        <FooterLogo/>
        <FooterNav>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Case studies</a></li>
            <li><a href="/">Our Work</a></li>
            <li><a href="/">Blog</a></li>
        </FooterNav>
        <FooterNav>
            <li><a href="/">Latest News</a></li>
            <li><a href="/">Our Partners</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">Freebies</a></li>
            <li><a href="/">Fun stuff</a></li>
        </FooterNav>
        <FooterContacts/>
        <FooterSocialNetworks/>
        {/*<div className={ classes.FooterLeft }>*/}
        {/*    <h3>Limba noastră</h3>*/}
        {/*    <p className={classes.FooterLinks}>*/}
        {/*        <a href="/">Acasă</a>*/}
        {/*        ·*/}
        {/*        <a href="/">Despre noi</a>*/}
        {/*        ·*/}
        {/*        <a href="http://www.transfrontaliera.ugal.ro/">Facultatea Transfrontalieră</a>*/}
        {/*    </p>*/}
        {/*    <p className={classes.FooterCompanyName}>Nichiforeac Nicolae &copy; 2021</p>*/}
        {/*</div>*/}
        {/*<div className={classes.FooterCenter}>*/}
        {/*    <div>*/}
        {/*        <IconContext.Provider value={{ size: "1.5em" }}>*/}
        {/*            <FaMapMarkerAlt/>*/}
        {/*        </IconContext.Provider>*/}
        {/*        <p><span>Str. Domnească, nr. 111, Galați, România</span></p>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*/!*<div className={classes.FooterAddress}>*!/*/}
        {/*/!*    <h2 className={classes.FooterLogo}>Limba noastră</h2>*!/*/}
        {/*/!*    <h2>Contact</h2>*!/*/}
        {/*/!*    <p>*!/*/}
        {/*/!*        Str. Domnească, nr. 111, Galați*!/*/}
        {/*/!*    </p>*!/*/}
        {/*/!*</div>*!/*/}
    </footer>
);

export default footer;