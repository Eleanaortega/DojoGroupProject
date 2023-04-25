import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box } from "@chakra-ui/layout";
import Chatbox from "../components/ChatBox";
import SideDrawer from "../components/SideDrawer"



const Chats = () => {


    return <div style={{ width: "100%" }}>
        <SideDrawer/>
        {/* {user && <SideDrawer/>} */}
        <Box d= 'flex' justifycontent = "space-between" w = ' 100px' >
{/* 
            <MyChats/> */}
            <Chatbox/>
            {/* {user && <MyChats/>}
            {user && <ChatBox/>} */}
        </Box>
    </div>


}

export default Chats