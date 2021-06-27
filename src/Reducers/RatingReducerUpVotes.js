
const RatingReducerUpVotes = (state,action) => {
    switch(action.type){
        case 'ADD_ONE':
            return state + 1;
        case 'REMOVE_ONE':
            return state - 1;
        default:
            return state
    }
}
export default RatingReducerUpVotes