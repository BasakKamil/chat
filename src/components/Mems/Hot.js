import React, { useContext } from 'react';
import {Grid} from '@material-ui/core';
import { MemContext } from '../../context/MemContextProvider';


const Hot = () => {


    const {mems} = useContext(MemContext);
    const newFilter = mems.filter(mem => {
        return (mem.upvotes - mem.downvotes) > 5
    });
    
    return mems.length ? (
        <div className="MemsListKamil">

           {newFilter.map((mem,key)=> {     
               return(
            <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="flex-start"
            >   
                <Grid item className="KamilaGridHot">
                    <h2>Miejsce {key+1}</h2>
                    <Grid item>
                    <div>
                        {mem.title}
                        <img className="" src={mem.img} alt={mem.title}/>
                    </div>
                    </Grid>
                </Grid>
            </Grid>
               )
           }
                
            )}         
        </div>
    ) : (
        <div className="NoMems">
           Niestety ale obecnie nie posiadamy memów w bazie :(
        </div>
    )
}

export default Hot