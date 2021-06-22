import {v4} from 'uuid';

export const memReducer = (state,action) => {
    switch(action.type){
        case 'ADD_MEM': 
            return [...state, {
                title: action.mem.title,
                upvotes: 0, 
                downvotes: 0, 
                img: action.mem.img,
                id: v4()
            }]
            
        // case 'REMOVE_MEM':
        //     return state.filter(mem => mem.id !== id)
        default :
            return state
    }
}