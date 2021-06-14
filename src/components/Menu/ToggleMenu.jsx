import React, {useState} from 'react';
import { Link } from  'react-router-dom';




 const ToggleMenu = () => {

    const [navbarOpen, setNavbarOpen] = useState(true);
    const handleToggle = (e) => {
        setNavbarOpen(prev=>!prev);
    }

        
        return(
            <nav className="navBar">
                <button className="btn btn-success" onClick={handleToggle}>{navbarOpen ? "Menu OFF" : " Menu ON"}</button>
                <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                    <li><Link to="/">HOT</Link></li>
                    <li><Link to="/regular">REGULAR</Link></li>
                </ul>
                 
            </nav>
        )    
    
 }


export default ToggleMenu