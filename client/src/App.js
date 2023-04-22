import React from 'react'
import Chats from './components/Chats.jsx'
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<SignUp/>} exact />
        <Route path="/login" element={<Login/>} />
      </Routes>
  </div>
  )
}

export default App