import React from "react";

import classes from './FooterContacts.css';
import FooterContact from './FooterContact/FooterContact';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';

const footerContacts = ( props ) => (
    <div className={classes.FooterContacts}>
        {/*<h3>Alăturați-vă de noi în rețele de socializare!</h3>*/}
        <FooterContact href='tel:+40336130186'>
            <FaPhoneSquareAlt/> +40336130186
        </FooterContact>
        <FooterContact href='mailto:secretariat.ft@ugal.ro'>
            <FaEnvelopeSquare/> secretariat.ft@ugal.ro
        </FooterContact>
    </div>
);

export default footerContacts;