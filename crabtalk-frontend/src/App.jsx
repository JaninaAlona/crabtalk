import './App.css'
import { MeetingContext } from './contexts/Contexts';
import { useState } from "react";
import Welcome from './pages/welcome/Welcome';
import DefaultMeeting from './contexts/DefaultMeeting';

function App() {

  const [meeting, setMeeting] = useState(DefaultMeeting);

  return (
    <>
      <MeetingContext value={{ meeting, setMeeting }}>
        <h1>Crabtalk</h1>
        <Welcome />
      </MeetingContext>
    </>
  )
}

export default App;