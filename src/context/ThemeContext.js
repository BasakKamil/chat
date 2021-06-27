import React , {Component, createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state = {
        isLightTheme: true,
        light: { syntax: '#5555', ui: '#ddd', bg: '#eee',ui2:'#dddd',padding: "8%",borderRadius: '10px'},
        dark: {syntax: '#d11d1d',ui: '#b50e0e',ui2:'#dddd', bg: '#555',padding: "4%",borderRadius: '10px'}
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