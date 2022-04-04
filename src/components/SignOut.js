import React from 'react'
import { auth } from '../firebase'

function SIgnOut() {
  return (
    <div>
        <button onClick={()=> auth.signOut()}>Sign out</button>
    </div>
  )
}

export default SIgnOut