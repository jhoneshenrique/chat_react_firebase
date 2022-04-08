import React, {useState} from 'react'
import {db, auth} from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function SendMessage({scroll}) {
    //Whatever is typed in the input field will be placed here
   const [msg, setMsg] = useState('');

    async function sendMessage(e){
        //In order to the page doesn't refresh when we press send
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        //Empty the field
        setMsg('');
        scroll.current.scrollIntoView({behavior:'smooth'})
    }

  return (
    <div>
        <form onSubmit={sendMessage} class="input-group input-group-lg">
            <input class="form-control" style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }}  value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder='Message...' />
            <button style={{ width: '90%', fontSize: '15px', fontWeight: '550', marginTop:'20px', marginLeft:'30px'}} class="btn btn-success" type="submit">Send</button>
        </form>
    </div>
  )
}

export default SendMessage