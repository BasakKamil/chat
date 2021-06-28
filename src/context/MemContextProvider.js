import React, {createContext, useReducer, useEffect } from 'react';
import { memReducer } from '../Reducers/memReducer';



export const MemContext = createContext();

const MemContextProvider = (props) => {
   
    const [mems,dispatch] = useReducer(memReducer,[], 
    () => {
        const localData = localStorage.getItem('mems');
        return localData ? JSON.parse(localData) : [];
    }
    );

    useEffect(()=> {
        // console.log(mems);
        localStorage.setItem('mems', JSON.stringify(mems))
    },[mems]);
  

    return (
        <MemContext.Provider value={{mems,dispatch}}>
            {props.children}
        </MemContext.Provider>
    )
}
export default MemContextProvider