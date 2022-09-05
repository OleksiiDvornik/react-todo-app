//Core
import React, { useState } from "react";

//Parts
import Button from "../Button";
import Input from "../Input";

//Styles
import useStyles from "./style";

function Item({ description, checked, ...props }) {
    const classes = useStyles();
    const [showInput, setShowInput] = useState(false);

    const handleChecked = () => {
        const { id, onCheck } = props;
        onCheck({id, checked: !checked});
    }
    
    const handleEdit = () => {
        setShowInput(!showInput);
    }

    const handleDelete = () => {
        const  {id, onDelete } = props;
        onDelete(id);
    }

    const handleUpdate = (value) => {
        const newDescription = value;
        const { id, onUpdate } = props;
        onUpdate({id, newDescription});
        setShowInput(!showInput);
    }
    
    return (
        <div className={classes.item + (checked ? " checked" : "")}>
            <label className={classes.label}>
                <input 
                    type="checkbox" 
                    defaultChecked={checked} 
                    onClick={handleChecked}/>
                <span className={classes.description}>{description}</span>
            </label>
            <Button 
                className={classes.editButton} 
                action={handleEdit}/>
            <Button 
                className={classes.deleteButton} 
                action={handleDelete}/>
            {showInput && <Input placeholder={description} action={handleUpdate}/>}
        </div>
    )
}

export default Item;
