import React, { useEffect, useState } from 'react'; 
import './App.css'
import Welcome from './components/Welcome.jsx'

function App() {
  const [message, setMessage] = useState('');  

    useEffect(() => {  
        fetch('/api/meetingvals')  
            .then((res) => console.log("Something coming")) 
    }, []);  

  return (
    <>
      <h1>Crabtalk</h1>
      <div>{message}</div>
      <Welcome />
    </>
  )
}

export default App
