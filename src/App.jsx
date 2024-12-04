import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<div className='remain'>about</div>}/>
        <Route path='/contact' element={<div className='remain'>contact</div>}/>
        <Route path='/products' element={<div className='remain'>products</div>}/>
        <Route path='/certificates' element={<div className='remain'>certificates</div>}/>
      </Routes>
    </Router>
  )
}

export default App
