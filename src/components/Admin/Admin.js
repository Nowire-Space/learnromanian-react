import React from 'react';
import Title from "../UI/Title/Title";
import classes from './Admin.css';

const admin = () => {
    return (
      <div className={classes.Admin}>
          <Title>Admin Console</Title>
          <div className={classes.Body}>
              {/*<div className={classes.Photo}>*/}
              {/*    <ProfilePhoto className={classes.ProfilePhoto}*/}
              {/*                  profilePhoto={this.state.profilePhoto}/>*/}
              {/*</div>*/}
              {/*<div className={classes.Info}>*/}
              {/*    <p>{this.state.userFamilyName} {this.state.userName} | {this.state.role}</p>*/}
              {/*    <p>Număr de telefon: {this.state.userPhoneNumber}</p>*/}
              {/*    <p>E-mail: {this.state.userEmail}</p>*/}
              {/*    <div className={classes.Password}>*/}
              {/*        <Button buttonType='Regular' halfSize>Schimbă parola</Button>*/}
              {/*    </div>*/}
              {/*</div>*/}
          </div>
      </div>
    )
};

export default admin;