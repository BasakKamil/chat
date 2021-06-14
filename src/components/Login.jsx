import {useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password,setPassword]= useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {'Project-ID':"94997f81-de2d-425b-8414-b60f6afe89d1",'User-Name': username,'User-Secret':password};
        
            try{
                await axios.get('http://api.chatengine.io/chats', { headers: authObject});
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                window.location.reload();
    
            } catch(error){
                setError("Cos poszlo nie tak...");    
            }
        
  
    }

    return(
        <div className="LogName">
            <div className="TitleForm">
                <h1 className="TitleName">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="UserInput" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="password" className="PasswordInput" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="FormButton">
                        <button className="ButtonSub" type="submit">
                            Start
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>
        </div>
    )
}

export default Login