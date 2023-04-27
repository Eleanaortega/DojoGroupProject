import React from 'react';
import { Box } from "@chakra-ui/react";
import { Stack, Text } from "@chakra-ui/layout";
import { ChatState } from '../Context/ChatProvider'
import { ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from '../config/chatLogics';
import ProfileModal from './ProfileModal';
import UpdateGroupChatModal from './UpdateGroupChatModal';


const SingleChat = ({ fetchAgain, setFetchAgain }) => {
const { user, selectedChat, setSelectedChat } = ChatState();
return (
    <>
    {selectedChat ? (
        <>
        <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            d="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
        >
            <IconButton
            d={{ base: "flex", md: "none" }}
            icon={<ArrowBackIcon />}
            onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
            <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
            </>
            ) : (
            <>{selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal 
                fetchAgain={fetchAgain}
                setFetchAgain={setFetchAgain}/>
            </>
            )}
        </Text>
        <Box
            d="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
        overflowY="hidden" 
            >

        </Box>
        </>
    ) : (
        <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
        >
        <Text fontSize="3x1" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
        </Text>
        </Box>
    )}
    </>
);
}

export default SingleChat;
