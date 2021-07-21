import React, {Component} from 'react';

import classes from './LogIn.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Link from '../UI/Link/Link';

class LogIn extends Component {
    state = {
        logInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Adresa e-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Parola'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    checkValidity( value, rules ) {
        let isValid = true;

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    logInHandler = ( event ) => {
        event.preventDefault();
        const logInFormData = {};
        for (let logInFormElementIdentifier in this.state.logInForm ) {
            logInFormData[logInFormElementIdentifier] = this.state.logInForm[logInFormElementIdentifier].value;
        }
        console.log(logInFormData);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLogInForm = { ...this.state.logInForm };
        const updatedFormElement = { ...updatedLogInForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLogInForm[ inputIdentifier ] = updatedFormElement;

        let formIsValid = true;
        for ( let inputIdentifier in updatedLogInForm ) {
            formIsValid = updatedLogInForm[ inputIdentifier ].valid && formIsValid;
            console.log(formIsValid);
        }

        this.setState({ logInForm: updatedLogInForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.logInForm) {
            formElementsArray.push({
               id: key,
               config: this.state.logInForm[key]
            });
        }

        let logInForm = (
            <form onSubmit={ this.logInHandler }>
                {formElementsArray.map(formElement => (
                    <Input key={ formElement.id }
                           elementType={ formElement.config.elementType }
                           elementConfig={ formElement.config.elementConfig }
                           invalid={ !formElement.config.valid }
                           touched={ formElement.config.touched }
                           value={ formElement.config.value }
                           changed={ ( event ) => this.inputChangedHandler( event, formElement.id ) }/>
                ))}
                    <Button buttonType='Important'
                            disabled={ !this.state.formIsValid }>
                        Conectare
                    </Button>
            </form>
        )

        return(
            <div className={classes.LogIn}>
                <Title>Autentificare</Title>
                { logInForm }
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
    }
};

export default LogIn;