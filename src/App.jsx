
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Solution from './pages/Solution'
import Build from './pages/Build'
import Ecosystem from './pages/Ecosystem'

function App() {

  return (
   <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/solution' element={<Solution/>}/>
      <Route path='/build' element={<Build/>}/>
      <Route path='/ecosystem' element= {<Ecosystem/>}/>
   </Routes>
  )
}

export default App
