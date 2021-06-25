import React, {Component} from 'react';
import { Link } from  'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

class Navbar extends Component{

static contextType = ThemeContext;


render(){
    console.log(this.context);
    const {isLightTheme,light,dark,toogleTheme} = this.context;
    const theme = isLightTheme ? light: dark;
    return(
        <nav style={{ background: theme.ui, color: theme.sytax }}>
            <ul className={`menuNav ${this.props.navbarOpen ? "showMenu" : ""}`}>
                <li onClick={toogleTheme} style={{backgroundColor: theme.ui, color: theme.sytax}}><Link to="/hot">HOT</Link></li>
                <li onClick={toogleTheme} style={{backgroundColor: theme.ui, color: theme.sytax}}><Link to="/regular">REGULAR</Link></li>          
            </ul>
        </nav>
    )
}}

export default Navbar