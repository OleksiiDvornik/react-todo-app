//Core 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Engine
import { deleteTodo, completeTodo, updateTodo } from '../../../engine/core/todo/thunk';
import { selectors } from '../../../engine/core/todo/selectors';

//Parts
import Button from '../Button';
import Input from '../Input';

//Styles
import useStyles from './styles';

function Item({ id, description, checked }) {
    const dispatch = useDispatch();
    const todos = useSelector(selectors.todos);
    const [showInput, setShowInput] = useState(false);
    const classes = useStyles();

    const handleDelete = () => {
        dispatch(deleteTodo(todos, id));
    };

    const handleChecked = (event) => {
        dispatch(completeTodo(event, todos, id));
    };

    const handleUpdate = (value) => {
        if (showInput === false) {
            setShowInput(!showInput);
        } else {
            dispatch(updateTodo(todos, id, value));
            setShowInput(!showInput);
        }
    };

    return (
        <div className={classes.item + (checked ? ' checked' : '')}>
            <label className={classes.label}>
                <input 
                    type="checkbox" 
                    defaultChecked={checked} 
                    onClick={handleChecked}/>
                <span className={classes.description}>{description}</span>
            </label>
            <Button 
                className={classes.editButton} 
                action={handleUpdate}/>
            <Button 
                className={classes.deleteButton} 
                action={handleDelete}/>
            {showInput && <Input placeholder={description} action={handleUpdate}/>}
        </div>
    )
}

export default Item;
