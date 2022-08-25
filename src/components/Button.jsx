//Core
import React from "react";

function Button({ type, action, text }) {
    return (
        <button 
            className={`todos__list-item-button todos__list-item-button--${type}`} 
            type="button" 
            onClick={action}>{text}</button>
    )
}

export default Button;
