import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Login.jsx';
import ChatPage from './Components/Chat.jsx';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/chat' element={<ChatPage/>} />
      </Routes>
  )
}

export default App