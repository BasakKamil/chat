

const templatesReducer = (state,action) => {
    switch(action.type){
        case 'LOAD': 
            return [...state, {
                templates: action.data.mems
            }]
        default :
            return state
    }
}
export default templatesReducer