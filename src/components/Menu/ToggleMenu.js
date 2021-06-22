import React, {useState} from 'react';
import Navbar from './Navbar';
import NewmemForm from '../Mems/NewMemForm';



 

 const ToggleMenu = ({templates}) => {

    
   
    const [navbarOpen, setNavbarOpen] = useState(true);
    const handleToggle = (e) => {
        setNavbarOpen(prev=>!prev);
    }

        
        return (
            <div className="navBar">
            <button className="btn btn-danger" onClick={handleToggle}>{navbarOpen ? "Menu OFF" : " Menu ON"}</button>
            <Navbar navbarOpen={navbarOpen}/> 
            <NewmemForm templates={templates}/>
        </div>
        )
        
    
 }


export default ToggleMenu