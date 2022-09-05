//Core
import React, { useState, useEffect, useRef } from 'react';

//Parts
import Button from '../Button';

//Styles
import useStyles from "./style";

function Input({ placeholder, action }) {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const inputElement = useRef(null);

    useEffect(() => {
        inputElement.current.focus();
    }, [])

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            action(value);
        }
    }

    const handleSave = () => {
        action(value);
    }

    return (
        <div className={classes.input}>
            <input 
                type="text" 
                placeholder={placeholder} 
                ref={inputElement} 
                onKeyDown={handleKeyDown}
                onChange={(event) => setValue(event.target.value)}/>
            <Button 
                className={classes.button} 
                action={handleSave}>Сохранить</Button>
        </div>
    )
}

export default Input;
