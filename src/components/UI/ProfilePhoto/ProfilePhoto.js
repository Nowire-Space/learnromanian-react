import React from 'react';

import defaultProfilePhoto from '../../../assets/images/default_user_profile_image_1.png';
import classes from './ProfilePhoto.css';

import Button from '../Button/Button';

const profilePhoto = props => {
    if (props.profilePhoto) {
        return (
            <div className={classes.Photo}>
                <img src={props.profilePhoto} alt="Profile photo"/>
            </div>
        )
    } else {
        return (
            <div className={classes.Photo}>
                <img src={defaultProfilePhoto} alt="Profile photo"/>
                <Button buttonType='Floating'>Încarcă</Button>
            </div>
        )
    }
}

export default profilePhoto;