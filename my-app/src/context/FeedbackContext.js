import {createContext , useState } from 'react'
import {v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    
    const [feedback , setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'this is feedback item 1 '
          },
          {
            id: 2,
            rating: 9,
            text: 'this is feedback item 2 '          
          },
          {
            id: 3,
            rating: 7,
            text: 'this is feedback item 3 '          
          }
    ])

      const [feedbackEdit , setfeedbackEdit] = useState ({
        item: {},
        edit: false
      })
      
      //update feedback 
      const updateFeedback = (id,upItem) => {
        setFeedback(feedback.map( (item) => item.id === id ? {...item , ...upItem } : item  ))
      }

      //delete feedback 
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you wnat to delete ?')){
        }
      }

      //add feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4 
        setFeedback([newFeedback, ...feedback])
        
    } 

    //set item to be updated 
    const editFeedback = (item) => {
      setfeedbackEdit({
        item,
        edit: true,
        
      })
    }

        return <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
              
        }} >

            {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext 