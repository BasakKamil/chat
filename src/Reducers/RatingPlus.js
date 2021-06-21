

const PlusReducer = (state,action) => {
    switch(action.type){
        case 'ADD_ONE':
            return state + 1
        case 'SUBTRACK_ONE':
            return state - 1
        default:
            return state
    }
}

export default PlusReducer