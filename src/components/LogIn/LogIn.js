import React from 'react';
// import axios from '../../axios-backend';

import classes from './LogIn.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Link from '../UI/Link/Link';

const logIn = (props) => {
    const logInHandler = (email, password) => {
        console.log(email, password);
    }

    return(
        <div className={classes.LogIn}>
            <Title>Autentificare</Title>
            <div className={classes.Inputs}>
                <Input
                    inputType='text'
                    inputPlaceholder='Adresa e-mail'
                    required/>
                <Input
                    inputType='password'
                    inputPlaceholder='Parola'
                    required/>
            </div>
            <Button
                buttonType='Important'
                clicked={() => logInHandler()}>
                Conectare
            </Button>
            <div className={classes.Links}>
                <div className={classes.Left}>
                    <Link href='/'>Creare cont</Link>
                </div>
                <div className={classes.Right}>
                    <Link href='/'>Resetare parolă</Link>
                </div>
            </div>
        </div>
    );
};

export default logIn;