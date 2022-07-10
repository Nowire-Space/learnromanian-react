import React from "react";

import classes from './Input.css';
import PasswordInput from "../PasswordInput/PasswordInput";

const input = ( props ) => {
    let inputElement;
    const inputClasses = [];

    if ( props.invalid && props.touched ) {
        inputClasses.push( classes.Invalid )
    }

    // if ( props.elementConfig.halfSize ) {
    //     inputClasses.push( classes.HalfSize )
    // }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = props.label ?
              <div className={classes.LabeledInput}>
                  <label>
                      {props.label}
                      <div className={classes.IconInput}>
                          {props.icon}
                          <input value={ props.value }
                                 onChange={ props.changed }
                                 placeholder={props.placeholder}/>
                      </div>
                  </label>
              </div> :
              <div className={classes.LabeledInput}>
                  {props.icon}
                  <input value={ props.value }
                         onChange={ props.changed } />
              </div>
            break;
        case ('passwordInput'):
            inputElement = <PasswordInput {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea value={ props.value }
                                     onChange={ props.changed }
                                     { ...props.elementConfig } />;
            break;
        case ('select'):
            inputElement = <div className={classes.LabeledInput}>
                <label>
                    {props.label}
                    <div className={classes.IconInput}>
                        {props.icon}
                        <select className={ classes.Select }
                                value={ props.value }
                                onChange={ props.changed }>
                            {props.options}

                            {/*{ props.options.map( option => (*/}
                            {/*    <option key={ option.value }*/}
                            {/*            value={ option.value }>*/}
                            {/*        { option.displayValue }*/}
                            {/*    </option>*/}
                            {/*)) }*/}
                        </select>
                    </div>
                </label>
            </div>
            break;
        case ('checkbox'):
            inputElement =
              <div>
                  <input type={ props.elementType } id={ props.elementName } name={ props.elementName }/>
                  <label htmlFor={ props.elementName }>{ props.label }</label>
              </div>
            break;
        default:
            inputElement = <input className={ inputClasses.join( ' ' ) }
                                  value={ props.value }
                                  onChange={ props.changed }
                                  { ...props.elementConfig } />;
    }

    return inputElement;
}

export default input;