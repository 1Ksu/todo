import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodoItem(state, action) {
            state.todos.push({
                id: v4(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false,
                createdAt: new Date(),
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo(state, action) { 
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.title = action.payload.title
            todo.description = action.payload.description
        }
    },
});

export const {addTodoItem, toggleComplete, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;