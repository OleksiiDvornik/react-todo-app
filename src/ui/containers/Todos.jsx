//Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Engine
import { selectors } from '../../engine/core/todo/selectors';
import { getTodos } from '../../engine/core/todo/thunk';

//Parts
import ErrorBoundary from './ErrorBoundary';
import Title from '../components/Title';
import Form from '../components/Form';
import Subtitle from '../components/Subtitle';
import Item from '../components/Item';
import Footer from '../components/Footer';

//Styles
import useStyles from './todosStyles';

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(selectors.todos);
    const classes = useStyles();

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <div className={classes.todos}>
                <Title>Які плани на сьогодні?</Title>
                <Form/>
                <Subtitle>Усі задачі</Subtitle>
                <div className={classes.list}>
                    {todos.length !== 0
                        ? todos.map(item => (
                            <Item
                                description={item.description}
                                id={item.id}
                                key={item.id}
                                checked={item.checked}
                            />
                        ))
                        : <span className={classes.text}>Задач немає</span>}
                </div>
                <Footer/>
            </div>
        </ErrorBoundary>
    )
}

export default Todos;
