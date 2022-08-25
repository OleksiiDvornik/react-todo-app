//Core
import React, { useState } from "react";

//Parts
import Button from "./Button";

function Item({ description, checked, ...props }) {
    const [showInput, setShowInput] = useState(false);

    const handleChecked = () => {
        const {id, onCheck, checked} = props;
        onCheck({id, checked: !checked});
    }
    
    const handleEdit = () => {
        setShowInput(!showInput);
    }

    const handleDelete = () => {
        const {id, onDelete} = props;
        onDelete(id);
    }

    const handleUpdate = (value) => {
        const newDescription = value;
        const {id, onUpdate} = props;
        onUpdate({id, newDescription});
        setShowInput(!showInput);
    }
    
    return (
        <div className={"todos__list-item" + (checked ? " checked" : "")}>
            <label className="todos__list-item-label">
                <input 
                    className="todos__list-item-check" 
                    type="checkbox" 
                    defaultChecked={checked} 
                    onClick={handleChecked}/>
                <span className="todos__list-item-desc">{description}</span>
            </label>
            <Button type="edit" action={handleEdit}/>
            <Button type="delete" action={handleDelete}/>
            {/* {showInput && <Input placeholder={description} action={handleUpdate}/>} */}
        </div>
    )
}

export default Item;
