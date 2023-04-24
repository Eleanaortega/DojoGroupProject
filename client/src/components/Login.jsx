import React from 'react'
import {VStack} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { useState } from 'react'
import { FormControl, FormLabel} from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleClick = () => setShow(!show);

    


const handleSubmit = (e) => {
    e.preventDefault()
    console.log('login')
    axios.post('http://localhost:8000/api/users/login', {
        email, password
    }, { withCredentials: true })
        .then ( res => {
            console.log("logged user" + res.data)
        } )
        .catch(err => console.log("Error"))
}

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
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
        >
        Login
    </Button>
    <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
        }}
        >
        Get Guest User Credentials
    </Button>
    </VStack>
    )
    }


    export default Login