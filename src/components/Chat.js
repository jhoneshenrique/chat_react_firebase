import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SIgnOut from './SignOut'

function Chat() {
  const scroll = useRef()
  //Hook that loads the messages
  const [messages, setMessages] = useState([])
  useEffect(()=>{
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
  })
},[])
  
  return (
    <div>
      <SIgnOut />
      <div className='msgs'>
          {messages.map(({id,text,photoURL, uid})=>(
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
              <div>
                <img src={photoURL} alt="User" />
                <p>{text}</p>
              </div>  
            </div>
          ))}
      </div>    
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat