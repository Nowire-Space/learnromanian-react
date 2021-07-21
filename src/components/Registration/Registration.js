import React, {Component} from 'react';

import classes from './Registration.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class Registration extends Component {
    state = {
        registrationForm: {
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nume de familie'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Prenume'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Numărul de telefon'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
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
            },
            verifiedPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Verificare parolă'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
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

    registrationHandler = (event) => {
        event.preventDefault();
        const registrationFormData = {};
        for (let registrationFormElementIdentifier in this.state.registrationForm ) {
            registrationFormData[registrationFormElementIdentifier] = this.state.registrationForm[registrationFormElementIdentifier].value;
        }
        console.log(registrationFormData);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedRegistrationForm = { ...this.state.registrationForm };
        const updatedFormElement = { ...updatedRegistrationForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedRegistrationForm[ inputIdentifier ] = updatedFormElement;
        console.log(updatedFormElement);
        this.setState({ registrationForm: updatedRegistrationForm });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.registrationForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registrationForm[key]
            });
        }

        let registrationForm = (
            <form onSubmit={ this.registrationHandler }>
                {formElementsArray.map(formElement => (
                    <Input key={ formElement.id }
                           elementType={ formElement.config.elementType }
                           elementConfig={ formElement.config.elementConfig }
                           invalid={ !formElement.config.valid }
                           touched={ formElement.config.touched }
                           value={ formElement.config.value }
                           changed={ ( event ) => this.inputChangedHandler( event, formElement.id ) }/>
                ))}
                <Button
                    buttonType='Important'>
                    Salvare
                </Button>
            </form>
        )

        return(
            <div className={classes.Registration}>
                <Title>Înregistrare</Title>
                { registrationForm }
            </div>
        );
    }
};

export default Registration;