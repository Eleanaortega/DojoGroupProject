import React from 'react'
import {VStack} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { useState } from 'react'
import { FormControl, FormLabel} from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'

const SignUp = () => {

const [show, setShow] = useState(false);
const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [confirmPassword, setConfirmPassword] = useState();
const [picture, setPicture] = useState();

const handleClick = () => setShow(!show);

const postDetails = (picture) => {}

const submitHandler = () => {}

  return ( <VStack spacing='5px'>
    <FormControl id='firstName' isRequired>
        <FormLabel>First Name</FormLabel>
        <Input 
            placeholder='Enter Your First Name'
            onChange={(e)=>setFirstName(e.target.value)}/>
    </FormControl>
    <FormControl id='lastName' isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input 
            placeholder='Enter Your Last Name'
            onChange={(e)=>setLastName(e.target.value)}/>
    </FormControl>
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
    <FormControl id='confirmPassword' isRequired>
        <FormLabel> Confirm Password</FormLabel>
        <InputGroup>
            <Input 
                type={show ? 'text' : 'password'}
                placeholder='Confirm Your Password'
                onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <InputRightElement width="4.5rem">
                <Button h='1.75rem' size='sm' onClick={handleClick}> 
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
    </FormControl>
    <FormControl>
        <FormLabel>Upload your Picture</FormLabel>
        <Input 
            type="file"
            p={.5}
            accept='image/*'
            onChange={(e) => postDetails(e.target.files[0])}/>
    </FormControl>
    <Button
        colorScheme='blue'
        width="100%"
        style={{ marginTop: 15}}
        onClick={submitHandler}>
        Sign Up
    </Button>
  </VStack>
  )
}

export default SignUp