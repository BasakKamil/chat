import React , {Component, createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state = {
        isLightTheme: true,
        light: { syntax: '#5555', ui: '#ddd', bg: '#eee',ui2:'#dddd'},
        dark: {syntax: '#dddd',ui: '#333',ui2:'#dddd', bg: '#555'}
    }

    toogleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state,toogleTheme: this.toogleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider