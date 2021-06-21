import React, { Component } from 'react';
import List from '@material-ui/core/List';
// import MemShow from './MemShow';

class Hot extends Component{


render(){
    const { mems }= this.props;
    const newFilter = mems.filter(mem => {
        return (mem.upvotes - mem.downvotes) > 5
    });
    console.log(newFilter);
    return mems.length ? (
        <div className="MemsListKamil">
           {newFilter.map(mem=> 
                <List>
                    {mem.title}
                </List>
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