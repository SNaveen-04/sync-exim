import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import HomePage from "./pages/HomePage"
import ConstrucionPage from './pages/ConstrucionPage'
import AboutPage from './pages/AboutPage'
import BusinessVerticalsPage from './pages/BusinessVerticalsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/sync-exim' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='contact' element={<ConstrucionPage/>}/>
          <Route path='verticals' element={<BusinessVerticalsPage/>}/>
          <Route path='certificates' element={<ConstrucionPage/>}/>
        </Route>
        <Route path='*' element={<div>Page Not found</div>} />
      </Routes>
    </>
  )
}

export default App
