import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box } from "@chakra-ui/react";
import Convos from '../components/Convos';
import ChatBox from '../components/ChatBox'
import SideDrawer from "../components/SideDrawer"
import { ChatState } from '../Context/ChatProvider'


const Chats = () => {
    const { user } = ChatState();

    return (
        <div style={{ width: "100%" }}>
        {user && <SideDrawer/>}
        <Box d= 'flex' justifycontent = "space-between" w= ' 100px' >
            {user && <Convos/>}
            {/* {user && <ChatBox/>} */}
        </Box>
    </div>
    )


}

export default Chats