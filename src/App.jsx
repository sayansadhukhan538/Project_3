import { Routes,Route }from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  
  return (
    <>

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
      
    </>
  )
}
export default App
