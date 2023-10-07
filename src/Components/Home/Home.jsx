import React from 'react'
import Sidebar from '../ChatRoom/Sidebar'
import Chat from '../ChatRoom/Chat'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
        <Sidebar/>
        <Chat/>
        </div>
    </div>
  )
}

export default Home