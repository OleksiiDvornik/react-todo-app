//Core
import React from "react";
import { v4 } from 'uuid';

//Styles
import useStyles from "./style";

function Form({ onAdd }) {
    const classes = useStyles();
    
    const handleAdd = (event) => {
        event.preventDefault();
        onAdd({id: v4(), description: event.target.description.value});
        event.target.description.value = '';
    }

    return (
        <form action="#" className={classes.form} onSubmit={handleAdd}>
            <input 
                className={classes.input}
                type="text" 
                name="description" 
                placeholder="Добавить новую задачу..."/>
            <button
                className={classes.button}
                type="submit">Добавить</button>
        </form>
    )
}

export default Form;
