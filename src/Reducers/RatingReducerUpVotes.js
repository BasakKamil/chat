
const RatingReducerUpVotes = (state,action) => {
    switch(action.type){
        case 'ADD_ONE':
            return state + 1;
        case 'REMOVE_ONE':
            return state - 1;
        case 'ADD_NUM':
                return state + action.num;
        default:
            return state
    }
}
export default RatingReducerUpVotes