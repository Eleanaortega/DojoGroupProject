import React, { useEffect } from 'react'
import axios from 'axios';

const Chats = () => {
    const fetchChats = async () => {

        const data = await axios.get('/api/chat')
        console.log(data)
    }
    useEffect(() => {
        fetchChats()
    }, [])

  return (
   <div>
    <p>whats ypo</p>
   </div>
  )
}

export default Chats