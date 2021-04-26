import React from "react";

import classes from './FooterSocialNetworks.css';
import FooterSocialNetwork from './FooterSocialNetwork/FooterSocialNetwork';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const footerSocialNetworks = ( props ) => (
    <div className={classes.FooterSocialNetworks}>
        <h3>Alăturați-vă de noi în rețele de socializare!</h3>
        <FooterSocialNetwork href='https://www.facebook.com/facultateatransfrontalieraudjg'>
            <FaFacebook/>
        </FooterSocialNetwork>
        <FooterSocialNetwork href='https://www.instagram.com/transfrontalieragalati/'>
            <FaInstagram/>
        </FooterSocialNetwork>
        <FooterSocialNetwork href='https://twitter.com/FacultateaUdjg'>
            <FaTwitter/>
        </FooterSocialNetwork>
    </div>
);

export default footerSocialNetworks;