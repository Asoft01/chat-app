import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'; 
import './App.css'; 

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID = "1335a620-ec54-449e-9393-f0421ef2e279"
            username= "asoft"
            userSecret = "123123"
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps }/>}
        />
    )
}

export default App; 