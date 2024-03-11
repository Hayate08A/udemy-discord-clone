import React from 'react';
import './Login.scss';
import { Button } from '@mui/material';
import iconDiscord from '../../images/discordIcon.png';

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img src={iconDiscord} alt="logo" />
      </div>
      <Button>ログイン</Button>
    </div>
  );
}

export default Login;
