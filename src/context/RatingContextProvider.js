import React,{ createContext, useReducer, useState } from "react";
import RatingReducerUpVotes from "../Reducers/RatingReducerUpVotes";


export const RatingContext =  createContext();

const RatingContextProvider = (props) => {
    
    const [upvotes,dispatch ] = useReducer(RatingReducerUpVotes,10); 
    const [downvotes,setDownvotes] = useState(2);
   
    const remove = () => {
        setDownvotes(downvotes + 1);
    }
   
    return (
        <RatingContext.Provider value={{upvotes,downvotes,setDownvotes,remove,dispatch}}>
            {props.children}
        </RatingContext.Provider>
    )
}

export default RatingContextProvider