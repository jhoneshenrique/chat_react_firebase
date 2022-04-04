import './App.css';
import Chat from './components/Chat';
import {auth} from './firebase.js'
import SignIn from './components/SignIn';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      {user ?  <Chat /> :  <SignIn /> }     
    </>
  );
}

export default App;
