

import './App.css';
import Backg from './Background/backg.jsx';
import Regular from './components/Mems/Regular.jsx';
import Hot from './components/Mems/Hot.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ToggleMenu from './components/Menu/ToggleMenu.js';
import { useEffect, useState } from 'react';
import ThemeContextProvider from './context/ThemeContext';
// import MemsList from './components/Mems/MemsList';
import {v4} from 'uuid';


function App() {

  
 const [mems,setMems] = useState([
  {title: 'Mem1',upvotes: 1, downvotes: 2, img: "https://i.imgflip.com/3lmzyx.jpg", id:1},
  {title: 'Mem2',upvotes: 2, downvotes: 3, img: "https://i.imgflip.com/3lmzyx.jpg", id:2},
  {title: 'Mem3',upvotes: 7, downvotes: 1, img: "https://i.imgflip.com/3lmzyx.jpg", id:3},
  {title: 'Mem4',upvotes: 17, downvotes: 2, img: "https://i.imgflip.com/3lmzyx.jpg", id:4}
  
 ]);
 const addMems = (title,img) => {
   setMems([...mems, {title: title,upvotes: 0,downvotes: 0, img: img, id: v4()}]);
 }
//  const removeMem = (id) => {
//     setMems(mems.filter(mem => mem.id !== id));
//  }
  const [templates,setTemplates] =useState([]);
  
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(x=>
         x.json().then(response =>
             {setTemplates(response.data.memes)
         })
    );
  },[]);
 
  


  return (
    <ThemeContextProvider>
      <Router>
        <div className="App">
          <ToggleMenu addMems={addMems} templates={templates}/>               
          <Backg/>
        </div>
        <Switch>
            <Route path='/regular'>      
              <Regular mems={mems} />
            </Route>
            <Route path='/hot'> 
              <Hot mems={mems}/>
            </Route>
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
