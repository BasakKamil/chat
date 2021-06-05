import MessageForm from "./MessageForm"

const OtherMessage = ({lastMessage, message}) => {

    const isFirstM = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return(
        <div className="LiniaWiadomosci">
            {isFirstM && 
            (
            <div
            className="AvatarS"
            style={{backgroundImage:`url(${message?.sender?.avatar})`}}
            />
            )}

            {
                  message?.attachments?.length > 0 ?
                   (
                        <img 
                            src={message.attachments[0].file}
                            alt="WiadomoscObrazek"
                            className="ObrazekWiadomosci"
                            style={{
                                marginLeft: isFirstM ? '4px' : '48px'
                            }}
                        />
                    ) : (
                        <div className="MojaWiadomosc" style={{float:'left',backgroundColor: '#00FFFF', marginLeft: isFirstM ? '4px' : '48px'}}>
                                {message.text}
                        </div>
                    )
                
            }
        
        </div>
    )
}

export default OtherMessage 