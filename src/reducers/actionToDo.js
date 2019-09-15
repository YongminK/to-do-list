const tasksReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_TASK':
            state = state.concat(action.playload);
            break;
        default:
            return state;
    };
};

export default tasksReducer;