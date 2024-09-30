import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    filter: 'ALL',
    searchTerm: '',
}
const todoSlice = createSlice({
    name: 'todos',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: Date.now(), text: action.payload.text, completed: false });
        },
        toggleTodo: (state, action) => { 
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        markCompleted: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = true;
            }
        },
        markIncompleted: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = false;
            }
        },
        filterTodo: (state, action) => {
            state.filter = action.payload.filter;
        },
        markAllCompleted: (state) => {
            state.todos.forEach(todo => {
                todo.completed = true;
            });
        },
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload.searchTerm;
        }
    }
})
export const { 
    addTodo, 
    toggleTodo, 
    removeTodo, 
    markCompleted, 
    markIncompleted, 
    filterTodo, 
    markAllCompleted, 
    updateSearchTerm 
  } = todoSlice.actions;

export default todoSlice.reducer; 