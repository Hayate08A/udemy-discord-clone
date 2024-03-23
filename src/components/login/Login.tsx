import './Login.scss';
import { Button } from '@mui/material';
import iconDiscord from '../../images/discordIcon.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err: Error) => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={iconDiscord} alt="logo" />
      </div>
      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
}

export default Login;
