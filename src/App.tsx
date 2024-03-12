import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppSelector } from './app/hooks';

function App() {
  const user = useAppSelector((state) => state.user);

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
