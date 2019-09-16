import 
    {   ADD_TODO,
        REMOVE_TODO,
        TOGGLE_TODO,
        SET_VISIBILITY_FILTER,
        CLEAR_COMPLETED,
        COMPLETE_ALL_TODO,
        CLEAR_ALL
    } from './actionTypes';

let nextID = 2;

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextID++,
    text
});

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});
export const clearCompleted = () =>({
    type: CLEAR_COMPLETED
});
export const completeAllTodo = () => ({
    type: COMPLETE_ALL_TODO
});
export const clearAll = () => ({
    type: CLEAR_ALL
});