import React, { useContext } from 'react'
import Input from './Input'
import Messages  from './Messages'
import Cam from '../../assets/cam.png'
import Add from '../../assets/add-user.png'
import More from '../../assets/more.png'
import { ChatContext } from '../../context/chatContext'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
    <div className="chatInfo">
    <span>{data.user?.displayName}</span>
      <div className="chatIcons">
        <img src={Cam} alt="" />
        <img src={Add} alt="" />
        <img src={More} alt="" />
      </div>
    </div>
    <Messages />
    <Input/>
  </div>
  )
}

export default Chat