import { Routes,Route }from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import { AuthProvider } from './context/auth.context'
import GuestGuard from './guards/Guest.guard'
import AuthGuard from './guards/Auth.guard'
function App() {

  
  return (
    <>
  <AuthProvider>
    <Routes>
      <Route path='/' element={<GuestGuard><Login/></GuestGuard>}/>
      <Route path='/signup' element={<GuestGuard><Signup/></GuestGuard>}/>
      <Route path='/dashboard' element={<AuthGuard><Dashboard/></AuthGuard>}/>
    </Routes>
    </AuthProvider>
    </>
  )
}
export default App
