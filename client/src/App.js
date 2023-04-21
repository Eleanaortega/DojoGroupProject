import React from 'react'
import Chats from './components/Chats.jsx'
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <div>
      {/* <Chats/> */}
      <SignUp/>
      <Login/>
    </div>
  )
}

export default App