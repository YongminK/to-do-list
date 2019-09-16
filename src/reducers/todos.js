import 
    { 
        ADD_TODO, 
        REMOVE_TODO, 
        TOGGLE_TODO, 
        CLEAR_COMPLETED, 
        COMPLETE_ALL_TODO, 
        CLEAR_ALL
    } from '../actions/actionTypes';

const INITIAL_DATA = [
    {
        id: 0,
        text: 'feed cat',
        completed: false
    },
    {
        id: 1,
        text: 'buy food',
        completed: false
    }
];

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_TODO:
        return [
            ...state,{
                id: action.id,
                text: action.text,
                completed: false,
            }
        ]
        case TOGGLE_TODO:
        return state.map(todo =>
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
            )
        case REMOVE_TODO:
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);
        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);
        case COMPLETE_ALL_TODO:
            const allChecked = state.every(todo => todo.completed);
            return state.map(todo => ({
                ...todo,
                completed: !allChecked
            }));
        case CLEAR_ALL:
            return state.filter(todo => todo.id === action.id)
        default:
            return state;
    }
};

export default TodoReducer;