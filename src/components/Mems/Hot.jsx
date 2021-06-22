import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
// import MemShow from './MemShow';

class Hot extends Component{


render(){
    const { mems }= this.props;
    const newFilter = mems.filter(mem => {
        return (mem.upvotes - mem.downvotes) > 5
    });
    
    return mems.length ? (
        <div className="MemsListKamil">

           {newFilter.map((mem,key)=> {     
               const klucz = key + 1;
               console.log(mem, key);
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
                        <img className="" src={mem.img}/>
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


}

export default Hot