import React, {createContext, useReducer} from 'react';
// import {v4} from 'uuid';
import { memReducer } from '../Reducers/memReducer';

export const MemContext = createContext();

const MemContextProvider = (props) => {
    const [mems,dispatch] = useReducer(memReducer,[]);
    // const addMems = (title,img) => {
    //     setMems([...mems, {title: title,upvotes: 0,downvotes: 0, img: img, id: v4()}]);
    // }
    // const removeMem = (id) => {
    //     setMems(mems.filter(mem => mem.id !== id));
    // }

    return (
        <MemContext.Provider value={{mems,dispatch}}>
            {props.children}
        </MemContext.Provider>
    )
}
export default MemContextProvider