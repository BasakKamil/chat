import { ChatEngine } from 'react-chat-engine';
import ChatF from '../components/ChatF';
import Login from '../components/Login';


const Chat = () => {

    if(!localStorage.getItem('username')) return <Login />
    return(
        <div className="Mes">
            <ChatEngine
                className="StyleChat"
                projectID="94997f81-de2d-425b-8414-b60f6afe89d1"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps)=> <ChatF {...chatAppProps} />} 
            />    
        </div>
    )
}

export default Chat 