const MyMessage = ({message}) => {
    if(message?.attachments?.length > 0){
        return (
            <img 
                src={message.attachments[0].file}
                alt="WiadomoscObrazek"
                className="ObrazekWiadomosci"
            />
        )
    }
    return(
        <div className="MojaWiadomosc">
            {message.text}
        </div>
    )
}

export default MyMessage