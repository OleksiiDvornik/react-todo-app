//Core
import { setTodos } from './slice';
import { v4 } from 'uuid';

// Get todos from server

export const getTodos = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3000/todos', {method: 'GET'});
        const data = await response.json();
        dispatch (setTodos(data));
    } catch (error) {
        console.console.error(error);
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
    newTodos.forEach(item => {
        return fetch('http://localhost:3000/todos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    });
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
    fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "checked": todo.checked
        })
    });
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
    fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "description": todo.description
        })
    });
}

// Delete todo item 

export const deleteTodo = (todos, id) => async (dispatch) => {
    const newTodos = todos.filter(item => item.id !== id);
    dispatch(setTodos(newTodos));
    fetch(`http://localhost:3000/todos/${id}`, {method: 'DELETE'});
};

// Clear all todo items 

export const clearTodos = (todos) => async (dispatch) => {
    dispatch(setTodos([]));
    todos.forEach(item => {
        fetch(`http://localhost:3000/todos/${item.id}`, {method: 'DELETE'})
    })
};
