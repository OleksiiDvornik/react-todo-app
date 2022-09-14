//Core
import { useDispatch, useSelector } from 'react-redux';

//Engine
import { selectors } from '../../../engine/core/todo/selectors';
import { clearTodos } from '../../../engine/core/todo/thunk';

//Parts
import Button from '../Button';

//Styles
import useStyles from './styles';

function Footer() {
    const todos = useSelector(selectors.todos);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleClear = () => {
        dispatch(clearTodos());
    };
    return (
        <div className={classes.footer}>
            {todos.length !== 0 && <span className={classes.text}>Всего задач: {todos.length}</span>}
            {todos.length !== 0 && <Button className={classes.button} action={handleClear}>Очистить список</Button>}
        </div>
    )
}

export default Footer;
