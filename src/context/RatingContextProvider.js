import React, {createContext, useState, useReducer} from 'react';

const RatingContext = createContext();

const RatingConttextProvider = (props) => {

const [addOneplus,dispatch] = useReducer(plusReducer,20);

    // const [ratingplus,setRatingplus] = useState(20);
    const [ratingminus,setRatingminus] = useState(20);


const addOneplus = setRatingplus(ratingplus + 1);
const subtractOne = setRatingminus(ratingminus - 1);

return(
    <RatingConttext.Provider value={ratingplus,ratingminus}>
        {props.children}
    </RatingConttext.Provider>
)

}