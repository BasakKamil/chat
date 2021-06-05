import { ChatEngine } from 'react-chat-engine';
import ChatF from '../components/ChatF';


const Chat = () => {
    return(
        <div className="Mes">
            <ChatEngine
                className="StyleChat"
                projectID="94997f81-de2d-425b-8414-b60f6afe89d1"
                userName="Bastric91@gmail.com"
                userSecret="Bastric020691!"
                renderChatFeed={(chatAppProps)=> <ChatF {...chatAppProps} />} 
            />    
         </div>
    )
}

export default Chat 