import { Routes, Route } from 'react-router-dom'
import ExitModal from './components/exitModal/ExitModal'
import Welcome from './components/welcome/Welcome'
import RegLetter from './components/registerLetter/RegLetter'
import Auth from './pages/authorization/Auth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  )
}

export default App
