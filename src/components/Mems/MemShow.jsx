const MemShow = (props) => {

    const {mem} = props;
return(

    <div alt={mem.title} key={mem.id}>
         <h2>{mem.title}</h2> 
        <button className="btn btn-danger kamilMinus">-</button>
        <img alt={mem.title} src={mem.img} className="MojImg"/>
        <button className="btn btn-success kamilPlus">+</button>
        <div className="details">
            <p>Upvotes: {mem.upvotes}</p>
            <p>Upvotes: {mem.downvotes}</p>
            
            
        </div>
    </div>
)
}

export default MemShow