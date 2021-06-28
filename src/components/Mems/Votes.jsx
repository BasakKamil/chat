import React, {useContext, useEffect} from 'react';
import { RatingContext } from '../../context/RatingContextProvider';
import { MemContext } from '../../context/MemContextProvider';
import { MemIndexContext } from '../../context/MemeIndexProvider';

const Votes = () => {

    const {dispatch } = useContext(RatingContext);
    const {memeIndex} = useContext(MemIndexContext);
    const {memes} = useContext(MemContext);
    const {upvotes,downvotes,remove} = useContext(RatingContext);

    const add = (e) => {
        dispatch({
            type: 'ADD_NUM',
            num: 1
        })
            
    }

    useEffect(()=>{
    if(upvotes){
        console.log(upvotes);
    }       
    },[upvotes]);


    return (
        <div className="container">
            <button onClick={add} className="btn btn-success kamilPlus">+</button>
            <p className="col-lg-12">Upvotes wynosi: {upvotes}</p>
            <p className="col-lg-12">Downvotes wynosi: {downvotes}</p>
            <button onClick={()=> remove()} className="btn btn-danger kamilMinus">-</button>
        </div>
    )
}

export default Votes