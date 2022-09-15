//core
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_LINK,
    headers: {
        'Content-Type': 'application/json'
    },
})

export const api = Object.freeze({
    getTodos() {
        return instance.get('todos');
    },
    postTodo(data) {
        return instance.post('todos', data);
    },
    patchTodo(id, data) {
        return instance.patch(`todos/${id}`, data);
    },
    deleteTodo(id) {
        return instance.delete(`todos/${id}`);
    }
}) 
