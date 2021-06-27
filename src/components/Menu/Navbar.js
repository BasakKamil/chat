import React, {Component} from 'react';
import { Link } from  'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

class Navbar extends Component{

static contextType = ThemeContext;


render(){
   
    const {isLightTheme,light,dark,toogleTheme} = this.context;
    const theme = isLightTheme ? light: dark;
    const theme1 = isLightTheme ? dark: light;


    return(

         <nav onClick={toogleTheme} >
            <ul className={`menuNav ${this.props.navbarOpen ? "showMenu" : ""}`}>
                <li><Link style={{backgroundColor: theme.ui, color: theme1.sytax, padding: theme.padding, borderRadius:theme.borderRadius}} to="/hot">HOT</Link></li>
                <li><Link style={{backgroundColor: theme1.ui, color: theme.sytax, padding: theme1.padding, borderRadius:theme1.borderRadius}} to="/regular">REGULAR</Link></li>          
            </ul>
        </nav>
    ) 
   
}}

export default Navbar