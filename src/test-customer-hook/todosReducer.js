function todosReducer(state, action) {
    switch (action.type) {
        case 'add':           
            return { ...state, text: action.text }         
        default:
            return state;
    }
}

export default todosReducer;