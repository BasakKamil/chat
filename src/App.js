

import './App.css';
import Backg from './Background/backg.jsx';
import Regular from './components/Mems/Regular.jsx';
import Hot from './components/Mems/Hot.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ToggleMenu from './components/Menu/ToggleMenu.js';
// import { useEffect, useState } from 'react';
import MemContextProvider from './context/MemContextProvider';
import ThemeContext from './context/ThemeContext';
// import MemsList from './components/Mems/MemsList';
// import {v4} from 'uuid';


function App() {


  return (
    
    <MemContextProvider>
      <Router>
        <div className="App">
        <ThemeContext>
          <ToggleMenu/>               
          <Backg/>
        </ThemeContext>
        </div>
        <Switch>
            <Route path='/regular'>      
              <Regular/>
            </Route>
            <Route path='/hot'> 
              <Hot/>
            </Route>
        </Switch>
      </Router>
      </MemContextProvider>
     
  );
}

export default App;
