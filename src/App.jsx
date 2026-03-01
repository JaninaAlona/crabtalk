import React, { useEffect } from 'react'; 
import './App.css'
import Welcome from './components/Welcome.jsx'

function App() {
    useEffect(() => {  
        fetch('/api/meetingvals')  
          //.then((res) => console.log("Something coming"))
          .then(() => console.log("Something coming")) 
    }, []);  

  return (
    <>
      <h1>Crabtalk</h1>
      <Welcome />
    </>
  )
}

export default App
