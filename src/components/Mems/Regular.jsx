import React, { Component } from 'react';
import List from '@material-ui/core/List';
import MemShow from './MemShow';

class Regular extends Component{


render(){
    const { mems }= this.props;
    
    return mems.length ? (
        <div className="MemsListKamil">
                {mems.map(mem => {
                return (
                <List className="col">
                       <MemShow mem={mem} key={mem.id}/>
                </List>)
                })
                }
        </div>
    ) : (
        <div className="NoMems">
           Niestety ale obecnie nie posiadamy memów w bazie :(
        </div>
    )
}


}

export default Regular