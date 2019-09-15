import { combineReducers } from 'redux';
import tasksReducer from './actionToDo';

const combineReduce = combineReducers ({
    action: tasksReducer
});

export default combineReduce;
