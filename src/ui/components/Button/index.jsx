function Button({ className, action, children }) {
    return (
        <button 
            className={className} 
            type="button" 
            onClick={action}>{children}</button>
    )
}

export default Button;
