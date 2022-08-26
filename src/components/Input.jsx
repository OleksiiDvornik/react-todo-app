//Core
import React, { useState, useEffect, useRef } from 'react';

//Parts
import Button from './Button';

function Input({ placeholder, action }) {
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
        <div className="todos__list-item-input">
            <input 
                type="text" 
                placeholder={placeholder} 
                ref={inputElement} 
                onKeyDown={handleKeyDown}
                onChange={(event) => setValue(event.target.value)}/>
            <Button type="save" text="Сохранить" action={handleSave}/>
        </div>
    )
}

export default Input;
