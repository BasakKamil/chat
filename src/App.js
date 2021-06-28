

import './App.css';
import Backg from './Background/backg.jsx';
import Regular from './components/Mems/Regular.js';
import Hot from './components/Mems/Hot.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ToggleMenu from './components/Menu/ToggleMenu.js';
import MemContextProvider from './context/MemContextProvider';
import ThemeContext from './context/ThemeContext';
import RatingContextProvider from './context/RatingContextProvider';
import MemeIndexProvider  from './context/MemeIndexProvider';



function App() {


  return (
    
    <MemContextProvider>  
      <RatingContextProvider>
      <Router>
        <div className="App">
        <MemeIndexProvider>
        <ThemeContext>
          <ToggleMenu/>               
          <Backg/>
        </ThemeContext>
        
        <Switch>
            <Route path='/hot'> 
              <Hot/>
            </Route>
            <Route path='/regular'>      
              <Regular/>
            </Route>
          
        </Switch>
        </MemeIndexProvider>
        </div>
      </Router>
      </RatingContextProvider>
     
      </MemContextProvider>
     
  );
}

export default App;
