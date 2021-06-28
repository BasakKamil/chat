import React, {Component, createContext, useReducer } from 'react';
import { memeIndexReducer } from '../Reducers/memeIndexReducer';

export const MemIndexContext = createContext();


class MemeIndexProvider extends Component {
    state = {
        memeIndex : 0
    }
    changeIndex = () => {
        this.setState({
            memeIndex: this.memeIndex + 1
        })
    }

    render(){
    return (
        <MemIndexContext.Provider value={{...this.state, changeIndex: this.changeIndex}}>
                 {this.props.children}
        </MemIndexContext.Provider>
    )
    }
}

export default MemeIndexProvider