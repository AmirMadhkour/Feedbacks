import {FaTimes,FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackItem({item}) { 

    const {deleteFeedback , editFeedback } = useContext (FeedbackContext)

    return (

    <Card>

        <div className="num-display">
          {item.rating}
          </div>

        <button  onClick={ () => deleteFeedback(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>

        <button onClick={ () =>   editFeedback(item)}
          className='edit' >
              <FaEdit color='purple' />
        </button>

        <div className="text-display">
          {item.text}
          </div> 

    </Card>
  )
}
FeedbackItem.propTypes = {
item: PropTypes.object.isRequired
}
export default FeedbackItem













/*import {useState} from 'react'*/

/*const [rating, setRating] = useState(7); // taaytelha b rating ou tmanipuleha b setRating ou pardefault usestate()
    const [text, setText] = useState('This is an example of a feedback item');
   /* const handleClick2 = () => {
    setText('amir')    
    setRating( (prev) =>
      {  return prev - 1 }
        
        )
    } <button onClick={handleClick2}>  Click2 </button> fost fiv card */