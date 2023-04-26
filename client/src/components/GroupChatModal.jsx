import { FormControl, Input, useDisclosure, useToast } from '@chakra-ui/react'
import React, {useState} from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody } from '@chakra-ui/react'

const GroupChatModal = ({children}) => {

    const {isOpen, onOpen, onClose } = useDisclosure();
    const [groupChatName, setGroupChatName] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]); 
    const [loading, setLoading] = useState(false);
  
    const toast = useToast();

        const { user, chats, setChats } = ChatState();

        const handleSearch = () => {

    }

    return (
        <>
          <span onClick={onOpen}>{children}</span>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                fontSize = '35px'
                fontFamily = ''
                d='flex'
                justifyContent='center'
              >
                Create Group Chat</ModalHeader>
              <ModalCloseButton />
              <ModalBody d='flex' flexDir='column' alignItems='center'>
                <FormControl>
                    <Input placeholder='Chat Name' mb={3} onChange={(e) => setGroupChatName(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <Input placeholder='Add Users: ' mb={1} onChange={(e) =>  handleSearch(e.target.value)}/>
                </FormControl>
                {/* selected users */}
                {/* render searched users  */}
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default GroupChatModal