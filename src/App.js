
import './App.css';
import Backg from './Background/backg.jsx';
import Regular from './components/Mems/Regular.jsx';
import Hot from './components/Mems/Hot.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ToggleMenu from './components/Menu/ToggleMenu.jsx';

function App() {


  return (
    <Router>
    <div className="App">
          <ToggleMenu/>    
          <Backg/>
    </div>
    <Switch>
        <Route path='/regular'>
            <Regular/>
        </Route>
        <Route path='/'>
          <Hot/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
