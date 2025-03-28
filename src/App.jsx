
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Solution from './pages/Solution'
import Build from './pages/Build'
import Ecosystem from './pages/Ecosystem'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/solution' element={<Solution/>}/>
      <Route path='/build' element={<Build/>}/>
      <Route path='/ecosystem' element= {<Ecosystem/>}/>
   </Routes>
   <Footer />
    </div>
   
  )
}

export default App
