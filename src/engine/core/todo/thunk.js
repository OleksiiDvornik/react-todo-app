//Core
import { setTodos } from './slice';
import { v4 } from 'uuid';

//Engine 
import { api } from '../../config/axios';

// Get todos from server

export const getTodos = () => async (dispatch) => {
    const { data, status } = await api.getTodos();
    if (status === 200) {
        dispatch (setTodos(data));
    }
};

// Add new todo item

export const addTodo = (values, todos) => async (dispatch) => {
    const todosArray = values.inputs.map((item) => {
        return {
            id: v4(),
            description: item,
            checked: false
        }
    });
    const newTodos = [...todos, ...todosArray];
    dispatch(setTodos(newTodos));
    newTodos.forEach(item => api.postTodo(item))
};

// Complete todo item

export const completeTodo = (event, todos, id) => async (dispatch) => {
    const newTodos = todos.map(item => {
        if (item.id === id) {
            return { ...item, checked: event.target.checked }
        }
        return item;
    })
    dispatch(setTodos(newTodos));
    const todo = newTodos.find(item => item.id === id)
    api.patchTodo(id, {"checked": todo.checked})
};

// Update todo item

export const updateTodo = (todos, id, value) => async (dispatch) => {
    const newDescription = value;
    const newTodos = todos.map(item => {
        if (item.id === id) {
            return { ...item, description: newDescription }
        }
        return item;
    })
    dispatch(setTodos(newTodos));
    const todo = newTodos.find(item => item.id === id)
    api.patchTodo(id, {"description": todo.description})
}

// Delete todo item 

export const deleteTodo = (todos, id) => async (dispatch) => {
    const newTodos = todos.filter(item => item.id !== id);
    dispatch(setTodos(newTodos));
    api.deleteTodo(id);
};

// Clear all todo items 

export const clearTodos = (todos) => async (dispatch) => {
    dispatch(setTodos([]));
    todos.forEach(item => api.deleteTodo(item.id))
};
