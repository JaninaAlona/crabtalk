import './App.css'
import { MeetingProvider } from './contexts/MeetingProvider.jsx';
import Welcome from './pages/welcome/Welcome.jsx';

function App() {

  return (
    <>
      <MeetingProvider>
        <h1>Crabtalk</h1>
        <Welcome />
      </MeetingProvider>
    </>
  )
}

export default App;