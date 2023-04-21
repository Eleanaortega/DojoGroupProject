import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Chats = () => {
const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get('http://localhost:8000/api/chat')
        setChats(data)
        console.log(data)
    }
    useEffect(() => {
        fetchChats()
    }, [])

  return (
   <div>
    {chats.map((data) => {
        return (
            <h1>{data.chatName}</h1>
        )
    })}</div>
  )
}

export default Chats