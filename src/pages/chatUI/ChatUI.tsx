
import ChatUIComponents from '../../components/chat/ChatUIComponents'
import Navbar from '../../components/navbar/Navbar'

function ChatUI() {
  return (
    <div>
        {/* navbar */}
        <Navbar/>

        {/* chatUI */}
        <ChatUIComponents/>
    </div>
  )
}

export default ChatUI