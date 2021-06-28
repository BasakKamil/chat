

export const memeIndexReducer = (state,action) => {
    switch(action.type){
        case 'NEXT': 
            return state + 1     
        case 'BACK':
           return state - 1
        default :
            return state
    }
}