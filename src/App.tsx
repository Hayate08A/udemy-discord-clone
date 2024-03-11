import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';

function App() {
  // TODO const user =useSelector((state)=>state.user.user)
  const user = null;

  return (
    <div className="App">
      {user ? (
        <>
          {/* chat */}
          <Chat />
          <Sidebar />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
