
import React, { useContext } from 'react';
import Mem from './Mem';
import Votes from './Votes';
import { Button } from '@material-ui/core';
import { MemContext } from '../../context/MemContextProvider';

const MemShow = (props) => {

    const {mem,box,id} = props;
    const {dispatch} = useContext(MemContext);
    console.log(id);

    const removeMem = () => {
        dispatch({
            type: 'REMOVE_MEM',
            id: id
        })
    }
  

return(
    
    <div className="KamilaStylReg" alt={mem.title} id={id}>
         <h2>{mem.title}</h2>
           <div> 
              <Mem mem={mem} box={box}/>         
           </div>
         
           <div className="details">
              <Votes/>
           </div>
        <Button onClick={removeMem}>USUN</Button>
    </div> 
) 
}

export default MemShow