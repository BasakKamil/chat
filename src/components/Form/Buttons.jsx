import React from 'react';
import SVGForward from '../Icons/SVGForward';
import SVGBack from '../Icons/SVGBack';
import Button from '@material-ui/core/Button';


const Buttons = ({next,back,classes,memeIndex,memes}) => {


    if(memeIndex === 0 ) return (
        <div className="KamilaButtony">
            <Button className={classes.skip} onClick={next}><SVGForward/></Button>
        </div>    
    )
    else if(memeIndex.length <= memes.length) return (
    <div>
        <Button className={classes.skip} onClick={back}><SVGBack/></Button>
    </div>)
    else return (
    <div>  
        <Button className={classes.skip} onClick={back}><SVGBack/></Button>
        <Button className={classes.skip} onClick={next}><SVGForward/></Button>
    </div>
    )
}

export default Buttons