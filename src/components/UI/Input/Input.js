import React from "react";

import classes from './Input.css';

const input = ( props ) => {
    let inputElement;
    const inputClasses = [ classes.Input ];

    if ( props.invalid && props.touched ) {
        inputClasses.push( classes.Invalid )
    }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = <input className={ inputClasses.join( ' ' ) }
                                  value={ props.value }
                                  onChange={ props.changed }
                                  { ...props.elementConfig } />;
            break;
        case ('textarea'):
            inputElement = <textarea value={ props.value }
                                     onChange={ props.changed }
                                     { ...props.elementConfig } />;
            break;
        case ('select'):
            inputElement = <select className={ classes.Select }
                                   value={ props.value }
                                   onChange={ props.changed }>
                { props.elementConfig.options.map( option => (
                    <option key={ option.value }
                            value={ option.value }>
                        { option.displayValue }
                    </option>
                )) }
            </select>;
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