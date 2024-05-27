import FeedbackList from '../components/FeedbackList.jsx'
import FeedbackStats from  '../components/FeedbackStats.jsx'
import FeedbackData from '../data/FeedbackData.js'
import FeedbackForm from '../components/FeedbackForm.jsx'
import AboutIconLink from '../components/AboutIconLink.jsx'
import Card from '../components/shared/Card.jsx'
import { BrowserRouter as Router, Routes , Route ,NavLink } from 'react-router-dom'
import {FeedbackProvider} from '../context/FeedbackContext.js'


function AboutPage() {


  return (
    <FeedbackProvider> 
      
<div className="container">    
    <FeedbackForm  />
    <FeedbackStats  />
    <FeedbackList  />
    <AboutIconLink />    
</div>

    </FeedbackProvider>
  )
}

export default AboutPage