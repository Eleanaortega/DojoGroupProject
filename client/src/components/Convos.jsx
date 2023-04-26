import React from 'react'
import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
// import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
// import GroupChatModal from "./miscellaneous/GroupChatModal";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const Convos = () => {
    const [loggedUser, setLoggedUser] = useState();
    const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();
    const toast = useToast();

    const fetchChats = async () => {
        try {

        const { data } = await axios.get("http://localhost:8000/api/users/chats", { withCredentials: true });
        setChats(data);
        console.log("data:", chats);
        } catch (error) {
        toast({
            title: "Error Occured!",
            description: "Failed to Load the chats",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
        });
        }
    };

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
        // eslint-disable-next-line
      }, []);

  return (
         <Box
            d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
            flexDir="column"
            alignItems="center"
            p={3}
            bg="white"
            w={{ base: "100%", md: "31%" }}
            borderRadius="lg"
            borderWidth="1px"
            >
                <Box
                    pb={3}
                    px={3}
                    fontSize={{ base: "8px", md: "0px" }}
                    fontFamily="Work sans"
                    d="flex-row"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    My Chats
                </Box>
        </Box>

  )
}

export default Convos