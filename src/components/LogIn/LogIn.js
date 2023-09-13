import React, {useState} from 'react';

import AccountService from '../../services/AccountService';
import AuthContext from '../../context/auth-context';

import classes from './LogIn.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Link from '../UI/Link/Link';

import {FaPen} from "react-icons/fa";
import {useHistory} from "react-router-dom";

const LogIn = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showLogInError, setShowLogInError] = useState(false);
    const [logInError, setLogInError] = useState('');

    const [emailMinLength] = useState(6);
    const [emailMaxLength] = useState(40);
    const [passwordMinLength] = useState(6);
    const [passwordMaxLength] = useState(20);

    const logInHandler = (event, updateUser) => {
        event.preventDefault();
        setLoading(true);
        setShowLogInError(false);
        validateForm() && AccountService
            .logIn(email, password)
            .then(() => {
                    updateUser();
                    history.push('/profile')
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
                    setLogInError(resMessage);
                    setShowLogInError(true);
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

        if (password.trim().length < passwordMinLength) {
            setPasswordError('Minimal password length is 6 characters!');
            valid = false;
        } else if (password.trim().length > passwordMaxLength) {
            setPasswordError('Maximum password length is 20 characters!');
            valid = false;
        }
        return valid;
    }

    return (
        <div className={classes.LogIn}>
            <div className={classes.Title}>
                <Title>Welcome!</Title>
                <Title>Please log in to get started.</Title>
            </div>
            <AuthContext.Consumer>
                {(context) =>
                    <form onSubmit={(event) => logInHandler(event, context.updateUser)}>
                        <Input elementType='input'
                               type='email'
                               label='E-mail address'
                               icon={<i><FaPen/></i>}
                               placeholder='Start typing...'
                               errorMessage={emailError}
                               changed={e => {
                                   setEmail(e.target.value);
                                   setEmailError('')
                               }}/>
                        <Input elementType='password'
                               label='Password'
                               placeholder='Start typing...'
                               errorMessage={passwordError}
                               changed={e => {
                                   setPassword(e.target.value);
                                   setPasswordError('')
                               }}/>
                        <div className={classes.Links}>
                            <div className={classes.Left}>
                                <Input elementName='rememberMeCheckbox'
                                       elementType='checkbox'
                                       label='Remember me'
                                       value={rememberMe}
                                       changed={e => setRememberMe(prevState => !prevState)}/>
                            </div>
                            <div className={classes.Right}>
                                <Link href='/reset'>Recover password</Link>
                            </div>
                        </div>
                        <Button buttonType='Regular'
                                loading={loading}>
                            Log In
                        </Button>
                        {showLogInError &&
                            <div className={classes.Error}>
                                <p>{logInError}</p>
                            </div>}
                    </form>
                }
            </AuthContext.Consumer>
        </div>
    );
}

export default LogIn;