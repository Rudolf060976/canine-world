import React from 'react'
import {
  Routes,
  BrowserRouter as Router,
  Route,  
} from 'react-router-dom'
import Homepage from './pages/Homepage/Index'
import PageNotFound from './pages/PageNotFound/Index'

const RouterComponent:React.FC = () => {

  return (
    <Router>  
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />      
      </Routes>      
    </Router>
  )
}

export default RouterComponent
