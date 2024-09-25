import { ADD_TODO, FILLER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes"

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text }
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
})
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id }
})
export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id }
})
export const markIncompleted = (id) => ({
    type: MARK_INCOMPLETED,
    payload: { id }
})
export const filterTodo = (filter) => ({
    type: FILLER_TODO,
    payload: { filter }
})
export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
})
export const updateSearchTerm = (searchTerm) => ({
    type: MARK_ALL_COMPLETED,
    payload: { searchTerm }
})