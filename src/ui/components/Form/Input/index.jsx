//Styles
import useStyles from './styles';

function Input({ input, meta, showDelete, onRemove, ...rest }) {
    const classes = useStyles();
    return (
        <label className={classes.label}>
            <input onChange={input.onChange} value={input.value} {...rest}/>
            {meta.error && <span className={classes.error}>*Длина должна быть не меньше 5 символов</span>}
            {showDelete && <button className={classes.button} type='button' onClick={onRemove}/>}
        </label>
    )
}

export default Input;
