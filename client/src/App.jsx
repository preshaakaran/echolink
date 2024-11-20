
import './App.css'
import Lobby from './screens/Lobby'
import { Routes, Route } from 'react-router-dom'
import Room from './screens/Room'


function App() {
  

  return (
   <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:id" element={<Room />} />
        
      </Routes>
    </div>
   </>
  )
}

export default App
