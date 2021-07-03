import React from 'react';
// import axios from '../../axios-backend';

import classes from './Registration.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Link from '../UI/Link/Link';

const registration = (props) => {
    const registrationHandler = (email, password) => {
        console.log(email, password);
    }

    return(
        <div className={classes.LogIn}>
            <Title>Înregistrare</Title>
            <div className={classes.Inputs}>
                <Input
                    inputType='text'
                    inputPlaceholder='Nume'
                    required/>
                <Input
                    inputType='text'
                    inputPlaceholder='Nume de familie'
                    required/>
                <Input
                    inputType='text'
                    inputPlaceholder='Numărul de telefon'
                    required/>
                <Input
                    inputType='text'
                    inputPlaceholder='Adresa e-mail'
                    required/>
                <Input
                    inputType='password'
                    inputPlaceholder='Parola'
                    required/>
                <Input
                    inputType='password'
                    inputPlaceholder='Verificare parolă'
                    required/>
            </div>
            <Button
                buttonType='Important'
                clicked={() => registrationHandler()}>
                Salvare
            </Button>
            {/*<div className={classes.Links}>*/}
            {/*    <div className={classes.Left}>*/}
            {/*        <Link href='/'>Creare cont</Link>*/}
            {/*    </div>*/}
            {/*    <div className={classes.Right}>*/}
            {/*        <Link href='/'>Resetare parolă</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default registration;