import {v4} from 'uuid';

export const memReducer = (state,action) => {
    switch(action.type){
        case 'ADD_MEM': 
            return [...state, {
                title: action.mem.title,
                upvotes: action.mem.upvotes, 
                downvotes: action.mem.downvotes, 
                captions: action.mem.captions,
                img: action.mem.img,
                id: v4()
            }]
            
        case 'REMOVE_MEM':
           return state.filter(mem => mem.id !== action.id)
        default :
            return state
    }
}