import React, {Component} from 'react';

class Check extends Component{
render(){
    const { mem } = this.props;
    
    return(
        <div className="col">
            <img src={mem.url} alt={mem.title} className="ImgSrc"/>
        </div>
    )
}
}

export default Check