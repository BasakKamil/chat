import MessageForm from '../Chat/MessageForm';
import MyMessage from '../Chat/MyMessage';
import OtherMessage from '../Chat/OtherMessage';


const ChatF = (props) => {

    const { chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];

    // console.log(chat,userName, messages);

    const render = () => {
        const keys = Object.keys(messages);
        console.log(keys);

        return keys.map((key,index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMymessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} className="MyMesBox">
                    <div className="MyBlockMessage">
                        {
                            isMymessage
                            ? <MyMessage message={message}/> 
                            : <OtherMessage message={messages} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read" style={{ marginRight: isMymessage ? '18px' : '0px',marginLeft: isMymessage ? '0px' : '68px' }}>
                        <p>*</p>
                    </div>
                </div>
            )
        })
    }
 
    
    if(!chat) return 'Loading...';

    return(
        <div className="ChatStyles">
             <div className="chatBigBox">
                 <h2 className="chatTitle">{chat?.title}</h2>
                 <div className="subtitle">
                     {chat.people.map((human)=> `${human.person.username}`)}
                 </div>
             </div>
             {render()}
             <div className="FormContainer">
                <MessageForm {...props} chatId={activeChat} />
             </div>
        </div>
    )



   
}

export default ChatF