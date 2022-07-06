import React, {Component} from 'react';

import ProfileService from "../../services/ProfileService";

import classes from './Profile.css';
import Title from "../UI/Title/Title";
import Button from '../UI/Button/Button';

class Profile extends Component {
    state = {
        profileInfo: undefined,
        userFamilyName: undefined,
        userName: undefined,
        userEmail: undefined,
        userPhoneNumber: undefined,
        userRole: undefined,
        profilePhoto: undefined
    }

    componentDidMount() {
        ProfileService
            .getProfile()
            .then((responseData) => {
                console.log(responseData)
                this.setState({
                    profileInfo: responseData,
                    userFamilyName: responseData.userFamilyName,
                    userName: responseData.userName,
                    role: responseData.role.roleName.replace('ROLE_', ''),
                    userEmail: responseData.userEmail,
                    userPhoneNumber: responseData.userPhoneNumber,
                    profilePhoto: responseData.photo
                });
            }, error => {
                //TODO
                console.log("Error while getting profile data!")
            })
    }

    render () {
        return (
            <div className={classes.Profile}>
                <Title>Profilul Dumnevoastă</Title>
                <div className={classes.Body}>
                    {/*<div className={classes.Photo}>*/}
                    {/*    <ProfilePhoto className={classes.ProfilePhoto}*/}
                    {/*                  profilePhoto={this.state.profilePhoto}/>*/}
                    {/*</div>*/}
                    <div className={classes.Info}>
                        <p>{this.state.userFamilyName} {this.state.userName} | {this.state.role}</p>
                        <p>Număr de telefon: {this.state.userPhoneNumber}</p>
                        <p>E-mail: {this.state.userEmail}</p>
                        <div className={classes.Password}>
                            <Button buttonType='Regular' halfSize>Schimbă parola</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;