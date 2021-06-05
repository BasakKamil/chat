
import './App.css';
import Backg from './Background/backg.jsx';
import Chat from './Chat/Chat.jsx';

function App() {

  
    const width = window.innerWidth;
    const height = window.innerHeight;
  
  return (
    <div className="App" style={{width,height}}>
          <Backg/>
          <div className="AllChat">
              <Chat/>
          </div>
    </div>
  );
}

export default App;
