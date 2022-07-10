import React, {useEffect, useState} from 'react';

import classes from './Registration.css';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Subtitle from "../UI/Subtitle/Subtitle";
import {FaPen} from "react-icons/fa";
import RoleService from "../../services/RoleService";
import SpecializationService from "../../services/SpecializationService";

const registration = ( props ) => {
    const [registrationRoles, setRegistrationRoles] = useState([]);
    const [registrationSpecializations, setRegistrationSpecializations] = useState([]);
    // checkValidity( value, rules ) {
    //     let isValid = true;
    //
    //     if ( rules.required ) {
    //         isValid = value.trim() !== '' && isValid;
    //     }
    //
    //     if ( rules.minLength ) {
    //         isValid = value.length >= rules.minLength && isValid;
    //     }
    //
    //     if ( rules.maxLength ) {
    //         isValid = value.length <= rules.maxLength && isValid;
    //     }
    //
    //     return isValid;
    // }
    useEffect(() => {
        RoleService
          .getRegistrationRoles()
          .then( (data) => {
              setRegistrationRoles(data);
            },
            error => {
                console.log('TODO on error')
            })

        SpecializationService
          .getRegistrationSpecializations()
          .then( (data) => {
              setRegistrationSpecializations(data);
            },
            error => {
                console.log('TODO on error')
            })
    }, []);

    const registrationHandler = (event) => {
        event.preventDefault();
        const registrationFormData = {};
        for (let registrationFormElementIdentifier in this.state.registrationForm ) {
            registrationFormData[registrationFormElementIdentifier] = this.state.registrationForm[registrationFormElementIdentifier].value;
        }
        console.log(registrationFormData);
    }

    // inputChangedHandler = (event, inputIdentifier) => {
    //     const updatedRegistrationForm = { ...this.state.registrationForm };
    //     const updatedFormElement = { ...updatedRegistrationForm[inputIdentifier] };
    //     updatedFormElement.value = event.target.value;
    //     updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    //     updatedFormElement.touched = true;
    //     updatedRegistrationForm[ inputIdentifier ] = updatedFormElement;
    //     console.log(updatedFormElement);
    //     this.setState({ registrationForm: updatedRegistrationForm });
    // }

    // render() {
    //     const formElementsArray = [];
    //     for (let key in this.state.registrationForm) {
    //         formElementsArray.push({
    //             id: key,
    //             config: this.state.registrationForm[key]
    //         });
    //     }
    //
    //     let registrationForm = (
    //         <form onSubmit={ this.registrationHandler }>
    //             {/*<div>*/}
    //             {/*    <Input elementType='input'*/}
    //             {/*           elementConfig={{*/}
    //             {/*               type: 'email',*/}
    //             {/*               label: 'E-mail',*/}
    //             {/*               icon: <i><FaPen/></i>,*/}
    //             {/*               placeholder: 'Your e-mail'}}/>*/}
    //             {/*    <Input elementType='input'*/}
    //             {/*           elementConfig={{*/}
    //             {/*               type: 'email',*/}
    //             {/*               label: 'E-mail',*/}
    //             {/*               icon: <i><FaPen/></i>,*/}
    //             {/*               placeholder: 'Your e-mail'}}/>*/}
    //             {/*</div>*/}
    //
    //             {formElementsArray.map(formElement =>
    //                 formElement.config.elementConfig.type === 'row' ?
    //                     (<div className={classes.Row}>
    //                         {console.log('el', formElement)}
    //                         {formElement.config.elements.map(element => (
    //                             <Input key={ element.id }
    //                                    elementType={ element.elementType }
    //                                    elementConfig={ element.elementConfig }
    //                                    invalid={ !element.valid }
    //                                    touched={ element.touched }
    //                                    value={ element.value }
    //                                    changed={ ( event ) => this.inputChangedHandler( event, element.id ) }/>
    //                         ))}
    //                     </div>)
    //                 :
    //                     (<Input key={ formElement.id }
    //                             elementType={ formElement.config.elementType }
    //                             elementConfig={ formElement.config.elementConfig }
    //                             invalid={ !formElement.config.valid }
    //                             touched={ formElement.config.touched }
    //                             value={ formElement.config.value }
    //                             changed={ ( event ) => this.inputChangedHandler( event, formElement.id ) }/>)
    //             )}
    //             <div className={classes.Links}>
    //                 <div className={classes.Left}>
    //                     <Input elementName='termsAndConditionsCheckbox'
    //                            elementType='checkbox'
    //                            label='I agree with terms & conditions' />
    //                 </div>
    //             </div>
    //             <Button
    //                 buttonType='Regular'>
    //                 Register
    //             </Button>
    //         </form>
    //     )
    //
    //
    // }

    return(
        <div className={classes.Registration}>
            <div className={classes.Title}>
                <Title>Registration</Title>
                <Subtitle>Enter your details to proceed further</Subtitle>
            </div>
            <form onSubmit={ registrationHandler }>
                <Input elementType='input'
                       label='E-mail'
                       icon={<i><FaPen/></i>}
                       placeholder='Your e-mail'/>
                <div className={classes.Row}>
                    <Input elementType='input'
                           label='First name'
                           // className={classes.RowFirstEl}
                           icon={<i><FaPen/></i>}
                           placeholder='Your name'/>
                    <Input elementType='input'
                           label='Last name'
                           // className={classes.RowSecondEl}
                           icon={<i><FaPen/></i>}
                           placeholder='Your last name'/>
                </div>
                <Input elementType='input'
                       label='Phone number'
                       icon={<i><FaPen/></i>}
                       placeholder='Your phone number'/>
                <Input elementType='select'
                       label='Select role'
                       options={registrationRoles.map(role => (
                         <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                       ))} />
                <Input elementType='select'
                       label='Select specialization'
                       options={registrationSpecializations.map(specialization => (
                         <option key={specialization.specializationId} value={specialization.specializationId}>{specialization.specializationName}</option>
                       ))} />
                <Input elementType='passwordInput'
                       label='Password'
                       placeholder='Add password'/>
                <Input elementType='passwordInput'
                       label='Confirm password'
                       placeholder='Confirm your password'/>
                <div className={classes.Links}>
                    <div className={classes.Left}>
                        <Input elementName='termsAndConditionsCheckbox'
                               elementType='checkbox'
                               label='I agree with terms & conditions' />
                    </div>
                </div>
                <Button buttonType='Regular'>
                    Register
                </Button>
            </form>
        </div>
    );
};

export default registration;