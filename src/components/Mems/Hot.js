import React, { useContext, useEffect, useState, useRef } from 'react';
import {Grid} from '@material-ui/core';
import { MemContext } from '../../context/MemContextProvider';



const Hot = () => {
    
    const {mems} = useContext(MemContext);

    const [newmems,setNewmems] = useState([]);
    const renderCount = useRef(0);
    
useEffect(()=>{
    setNewmems( mems.filter(
        (mem) => {
            return (mem.upvotes - mem.downvotes) > 5    
        }
    ));
},[]);

    
    


    return newmems.length ? (
        <div className="MemsListKamil">

           {newmems.map((mem,key)=> {   
               
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
                    <div className="KamilaHotCenter">
                        <h3>{mem.title}</h3>
                        <img className="MemHot" src={mem.img} alt={mem.title}/>
                        <div className="KamilaMapHot">
                        {mem.captions.map((text,index) =>{
                            const nr = index +1 ;
                             return (
                                <p style={{marginTop:`${nr}3%`}} key={index}>{text}</p>
                            )
                        })}
                        </div>
                    </div>
                    </Grid>
                </Grid>
            </Grid>
               )
           }
                
            )}         
        </div>
    ) : (
        <div className="noMems">
           Niestety Memy maja za slabe Oceny  :(    
        </div>
    )
}

export default Hot