import React, {Component} from 'react';
import { Link } from  'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

class Navbar extends Component{
static contextType = ThemeContext;
 

render(){
    const {isLightTheme,light,dark} = this.context;
    const theme = isLightTheme ? light : dark;
    return(
        <nav style={{background: theme.ui, color: theme.sytax}}>
        <ul className={`menuNav ${this.props.navbarOpen ? "showMenu" : ""}`}>
                    <li style={{background: theme.ui}}><Link to="/hot">HOT</Link></li>
                    <li style={{background: theme.ui}}><Link to="/regular">REGULAR</Link></li>
                    
        </ul>
        </nav>
    )
}}

export default Navbar