import React, {useEffect, useState} from 'react';

import AccountService from '../../services/AccountService';

import classes from './Validation.css';
import Title from '../UI/Title/Title';

import {useParams} from "react-router-dom";

const Validation = ( ) => {
    let {token} = useParams()

    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        AccountService
            .validate(token)
            .then((response) => {
                    setMessage(response.data);
                },
                error => {
                    error.response.status &&
                    setErrorMessage('Please provide a valid token!');
                });
    }, []);

    return (
        <div className={classes.Validation}>
            <div className={classes.Title}>
                <Title>Welcome!</Title>
                <Title>Please wait for token validation...</Title>
            </div>
            <p>{message}</p>
            <p className={classes.Error}>{errorMessage}</p>
        </div>
    );
}

export default Validation;