import {v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes , Route ,NavLink } from 'react-router-dom'
import {useState} from 'react'
import Card from './components/shared/Card.jsx'
import Header from "./components/Header.jsx"
import FeedbackData from './data/FeedbackData.js'
import AboutPage from './pages/AboutPage.jsx'
import AllPage from './pages/AllPage.jsx'
import Post from './components/Post.jsx'
import {FeedbackProvider} from './context/FeedbackContext.js'


function App() {

 //addFedback wali handleAdd  
return (
    <>
<Router>
<Header  /> 
    <div className='container'>
                 
          <Routes>
          <Route path='/' element={<AllPage />} />            
          <Route path='/about' element={<AboutPage />} />
          <Route path='/post/*' element={<Post />} />
          </Routes>


</div>
</Router>

</>
)}
export default App 

//className nit Class 
/*
<Card>
   <NavLink to='/' activeClassName='active' >
      Home 
    </NavLink> 
    <NavLink to='/about' activeClassName='active' >
      About
    </NavLink> 
</Card>
*/