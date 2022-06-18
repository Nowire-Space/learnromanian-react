import React, {Component} from 'react';

import AuthService from '../../services/AuthService';
import AuthContext from '../../context/auth-context';

import classes from './LogIn.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Link from '../UI/Link/Link';
import Sticker from '../UI/Sticker/Sticker';

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
        loading: false,
        message: "",
        showMessage: false
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

    logInHandler = ( event, updateUser ) => {
        event.preventDefault();

        this.setState({ message: "", showMessage: false, loading: true });

        const logInFormData = {};
        for (let logInFormElementIdentifier in this.state.logInForm ) {
            logInFormData[logInFormElementIdentifier] = this.state.logInForm[logInFormElementIdentifier].value;
        }

        AuthService
            .logIn(this.state.logInForm.email.value, this.state.logInForm.password.value)
            .then( () => {
                updateUser();
                this.props.history.push('/profile')
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    console.log(resMessage);

                    this.setState({
                        loading: false,
                        message: resMessage,
                        showMessage: true
                    });
                })
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
            <AuthContext.Consumer>
                {(context) =>
                    <form onSubmit={(event) => this.logInHandler(event, context.updateUser) }>
                        {formElementsArray.map( formElement => (
                            <Input key={ formElement.id }
                                   elementType={ formElement.config.elementType }
                                   elementConfig={ formElement.config.elementConfig }
                                   invalid={ !formElement.config.valid }
                                   touched={ formElement.config.touched }
                                   value={ formElement.config.value }
                                   changed={ ( event ) => this.inputChangedHandler( event, formElement.id ) }/>
                        ))}
                        { this.state.showMessage && <Sticker>
                            {this.state.message.replace("Error: ", "")}
                        </Sticker>}
                        <Button buttonType='Important'
                                disabled={ !this.state.formIsValid }
                                loading = { this.state.loading }>
                            Conectare
                        </Button>
                    </form>}
            </AuthContext.Consumer>
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