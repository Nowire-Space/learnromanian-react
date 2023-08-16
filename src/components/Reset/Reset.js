import React, {useState} from 'react';

import AccountService from '../../services/AccountService';

import classes from './Reset.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import {FaPen} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import Subtitle from "../UI/Subtitle/Subtitle";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const [resetError, setResetError] = useState(false);

    const [emailMinLength] = useState(6);
    const [emailMaxLength] = useState(40);

    const resetHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        validateForm() && AccountService
            .reset(email)
            .then((response) => {
                    console.log(response.data);
                    setResetError(response.data);
                    setLoading(false);
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    console.log(resMessage);
                    setLoading(false);
                    setResetError(resMessage);
                });
    }

    const validateForm = () => {
        const validEmailRegEx = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        let valid = true;
        if (email.trim().length < emailMinLength) {
            setEmailError('Minimal email length is 6 characters!');
            valid = false;
        } else if (email.trim().length > emailMaxLength) {
            setEmailError('Maximum email length is 40 characters!');
            valid = false;
        } else if (!validEmailRegEx.test(email.trim())) {
            setEmailError('Please provide valid email!');
            valid = false;
        }
        return valid;
    }

    return (
        <div className={classes.Reset}>
            <div className={classes.Title}>
                <Title>Password reset</Title>
                <Subtitle>Please provide your email address to reset password</Subtitle>
            </div>
            <form onSubmit={resetHandler}>
                <Input elementType='input'
                       type='email'
                       label='E-mail address'
                       icon={<i><FaPen/></i>}
                       placeholder='Your e-mail'
                       errorMessage={emailError}
                       changed={e => {
                           setEmail(e.target.value);
                           setEmailError('');
                       }}/>
                <Button buttonType='Regular'
                        loading={loading}>
                    Register
                </Button>
                {resetError &&
                    <div className={classes.Error}>
                        <p>{resetError}</p>
                    </div>}
            </form>
        </div>
    );
}

export default LogIn;