import { Routes, Route } from 'react-router-dom'
import ExitModal from './components/exitModal/ExitModal'
import Welcome from './components/welcome/Welcome'

function App() {
  return (
    <ExitModal />
    // <>
    //   <Routes>
    //     <Route path="/welcome" element={<Welcome />} />
    //   </Routes>
    // </>
  )
}

export default App
