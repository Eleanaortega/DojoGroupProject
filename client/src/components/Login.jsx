import React from 'react'
import {VStack} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { useState } from 'react'
import { FormControl, FormLabel} from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'

const Login = () => {

    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => setShow(!show);

    const postDetails = (picture) => {}

    const submitHandler = () => {}

    return ( <VStack spacing='5px'>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter Your Email'
                onChange={(e)=>setEmail(e.target.value)}/>
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input 
                    type={show ? 'text' : 'password'}
                    placeholder='Enter Your Password'
                    onChange={(e)=>setPassword(e.target.value)}/>
                <InputRightElement width="4.5rem">
                    <Button h='1.75rem' size='sm' onClick={handleClick}> 
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button
            colorScheme='blue'
            width="100%"
            style={{ marginTop: 15}}
            onClick={submitHandler}>
            Login
        </Button>
        <Button 
            variant='solid'
            colorScheme='blue'
            width='100%'
            onClick={() => {
                setEmail('guest@example.com');
                setPassword('12345678');
            }}
        >
            Demo Credentials 
            </Button>
    </VStack>
    )
    }


    export default Login