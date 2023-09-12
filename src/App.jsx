import { Routes,Route }from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  
  return (
    <>

    <Routes>
      <Route to='/' element={<Login/>}/>
      <Route to='/signup' element={<Signup/>}/>
    </Routes>
      
    </>
  )
}
export default App
