//Core
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    showInput: false
};

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        }
    }
});

export const { setTodos } = todo.actions;
export default todo.reducer;
