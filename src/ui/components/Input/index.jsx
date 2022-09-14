//Core
import { useState, useEffect, useRef } from 'react';

//Parts
import Button from '../Button';

//Styles
import useStyles from './styles';

function Input({ placeholder, action }) {
    const [value, setValue] = useState('');
    const inputElement = useRef(null);
    const classes = useStyles();

    useEffect(() => {
        inputElement.current.focus();
    }, [])   

    return (
        <div className={classes.input}>
            <input
                type="text"
                placeholder={placeholder}
                ref={inputElement}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" ? action(value) : undefined}/>
            <Button
                className={classes.button} 
                action={() => action(value)}>Сохранить</Button>
        </div>
    )
}

export default Input;
