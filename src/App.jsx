import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/sync-exim' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='about' element={<div>about</div>}/>
          <Route path='contact' element={<div>contact</div>}/>  
        </Route>
        <Route path='*' element={<div>Page Not found</div>} />
      </Routes>
    </>
  )
}

export default App
