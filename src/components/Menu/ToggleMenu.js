import React, {useState} from 'react';
import Navbar from './Navbar';
import NewmemForm from '../Mems/NewMemForm';
// import { MemContext } from '../../context/MemContex';


 

 const ToggleMenu = ({templates,addMems}) => {


    
    const [navbarOpen, setNavbarOpen] = useState(true);
    const handleToggle = (e) => {
        setNavbarOpen(prev=>!prev);
    }
    const [isActive,setisActive] = useState(false);
   
    const handleToggles = () => {
        setisActive( !isActive );
    };

        if (isActive===true) 
        return (
            <div className="navBar">
            <button className="btn btn-success" onClick={handleToggle}>{navbarOpen ? "Menu OFF" : " Menu ON"}</button>
            <button className="btn btn-danger" onClick={handleToggles}>Form OFF</button>
            <Navbar navbarOpen={navbarOpen}/> 
            <NewmemForm templates={templates} addMems={addMems}/>
        </div>
        )
        return(
            <div className="navBar">
                <button className="btn btn-success KamilaButt" onClick={handleToggle}>{navbarOpen ? "Menu OFF" : " Menu ON"}</button>
                <button className="btn btn-primary KamilaFormButt" onClick={handleToggles}>Form ON</button>
                <Navbar navbarOpen={navbarOpen}/> 
                
            </div>
        )    
    
 }


export default ToggleMenu