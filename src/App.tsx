import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"
import "./App.css"
import Home from './pages/home/Home';
import Diagnostic from './pages/diagnostic/Diagnostic';
import ChatUI from './pages/chatUI/ChatUI';
import Login from './components/login/Login';
import Register from './components/Register/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatUI" element={<ChatUI />} />
        <Route path="/diagnosis" element={<Diagnostic />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;
