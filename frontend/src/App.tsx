import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import LandingPage from './views/LandingPage'
import RoomPage from './views/RoomPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/room/:id' element={<RoomPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
