import React, { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const submit = () => {
    setUser('')
    setPass('')
  }
  return (
    <div className='App'>
      <h1>hello there</h1>
      <input 
        type='text' 
        name='user' 
        placeholder='username'
        value={user}
        className='user-input'
        onChange={e => setUser(e.target.value)} />
      <input 
        type='password' 
        name='pass' 
        placeholder='password'
        value={pass}
        className='pass-input'
        onChange={e => setPass(e.target.value)} />
      <button 
        onClick={submit}
        className='btn'>submit</button>
    </div>
  )
}

export default App