//Core
import React from "react";
import { v4 } from 'uuid';

function Form({ className, onAdd }) {
   
    const handleAdd = (event) => {
        event.preventDefault();
        onAdd({id: v4(), description: event.target.description.value});
        event.target.description.value = '';
    }

    return (
        <form action="#" className={className} onSubmit={handleAdd}>
            <input 
                className="form__input" 
                type="text" 
                name="description" 
                placeholder="Добавить новую задачу..."/>
            <button
                className="form__button" 
                type="submit">Добавить</button>
        </form>
    )
}

export default Form;
