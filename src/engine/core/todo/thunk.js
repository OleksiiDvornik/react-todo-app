//Core
import { setTodos } from './slice';
import { v4 } from 'uuid';

export const getTodos = () => (dispatch) => {
    dispatch(setTodos(JSON.parse(localStorage.getItem('todos')) || []));
};

export const addTodo = (values, todos) => (dispatch) => {
    const todosArray = values.inputs.map((item) => {
        return {
            id: v4(),
            description: item,
            checked: false
        }
    });
    const newTodos = [...todos, ...todosArray];
    dispatch(setTodos(newTodos));
    localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const deleteTodo = (todos, id) => (dispatch) => {
    const newTodos = todos.filter(item => item.id !== id);
    dispatch(setTodos(newTodos));
    localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const completeTodo = (event, todos, id) => (dispatch) => {
    const newTodos = todos.map(item => {
        if (item.id === id) {
            return { ...item, checked: event.target.checked }
        }
        return item;
    })
    dispatch(setTodos(newTodos));
    localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const updateTodo = (todos, id, value) => (dispatch) => {
    const newDescription = value;
    const newTodos = todos.map(item => {
        if (item.id === id) {
            return { ...item, description: newDescription }
        }
        return item;
    })
    dispatch(setTodos(newTodos));
    localStorage.setItem('todos', JSON.stringify(newTodos));
}

export const clearTodos = () => (dispatch) => {
    dispatch(setTodos([]));
    localStorage.setItem('todos', JSON.stringify([]));
};
