import React, {createContext, useReducer, useEffect } from 'react';
import { memReducer } from '../Reducers/memReducer';

export const MemContext = createContext();

const MemContextProvider = (props) => {
    const [mems,dispatch] = useReducer(memReducer,[
        {title: 'Mem1',upvotes: 1, downvotes: 2, img: "https://i.imgflip.com/3lmzyx.jpg", id:1},
        {title: 'Mem2',upvotes: 2, downvotes: 3, img: "https://i.imgflip.com/3lmzyx.jpg", id:2},
        {title: 'Mem3',upvotes: 7, downvotes: 1, img: "https://i.imgflip.com/3lmzyx.jpg", id:3},
        {title: 'Mem4',upvotes: 17, downvotes: 2, img: "https://i.imgflip.com/3lmzyx.jpg", id:4},
        {title: 'Mem5',upvotes: 17, downvotes: 2, img: "https://i.imgflip.com/3lmzyx.jpg", id:5},
        {title: 'Mem6',upvotes: 17, downvotes: 2, img: "https://i.imgflip.com/3lmzyx.jpg", id:5},
        {title: 'Mem7',upvotes: 17, downvotes: 2, img: "https://i.imgflip.com/3lmzyx.jpg", id:6}
    ], 
    // () => {
    //     const localData = localStorage.getItem('mems');
    //     return localData ? JSON.parse(localData) : [];
    // }
    );

    useEffect(()=> {
        localStorage.setItem('mem', JSON.stringify(mems))
    },[mems]);

    

    // console.log(mems);

    

    return (
        <MemContext.Provider value={{mems,dispatch}}>
            {props.children}
        </MemContext.Provider>
    )
}
export default MemContextProvider