import React, {useContext, useEffect} from 'react';
import { RatingContext } from '../../context/RatingContextProvider';
import { MemContext } from '../../context/MemContextProvider';

const Votes = () => {

    const { dispatch } = useContext(RatingContext);
    // const {mems} = useContext(MemContext);
    const {upvotes,downvotes,remove} = useContext(RatingContext);

    const add = (e) => {
        dispatch({
            type: 'ADD_ONE'
        })
            
    }

//    useEffect(()=>{
//     if(upvotes > 0){   
//         console.log(mems);
//     }
//    },[upvotes]);


    return (
        <div>
            <button onClick={add} className="btn btn-success kamilPlus">+</button>
            <p>Upvotes wynosi: {upvotes}</p>
            <p>Downvotes wynosi: {downvotes}</p>
            <button onClick={()=> remove()} className="btn btn-danger kamilMinus">-</button>
        </div>
    )
}

export default Votes