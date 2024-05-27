import {useState , useContext , useEffect} from 'react' 
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext  from '../context/FeedbackContext'



function FeedbackForm() {

    const {addFeedback,feedbackEdit,updateFeedback} = useContext (FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit] 
    )
    
    const [text, setText] = useState('') 
    //useState('')  text te5ou par default chaine vide
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating,setRating]=useState(10)
    const handleTextChange = (e) => {
        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length<=10){
            setMessage('Text should be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    //e howa illi bch dakhlou
    const handleSubmit= (e) => {
        e.preventDefault()
        //twakeff levent  
        if (text.trim().length > 10) {  // est une méthode couramment utilisée en JavaScript pour supprimer les espaces vides en début et en fin d'une chaîne de caractères
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id , newFeedback)
            }else 
{           addFeedback(newFeedback)
}          
           setText('')
        }
    }
  
    return (

    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us ? </h2>
           <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input
                onChange={handleTextChange}
                 type="text" 
                 placeholder='Write a review'
                 value={text} 
                 
                 />
                <Button type='submit'  isDisabled={btnDisabled}>
                    Send
                    </Button>
            </div>
            {/*<div className="message">{message}</div> same*/}
            {message && <div className='message'>{message}</div>} 
            {/*if message then tji l fnt div */}
        </form>
    </Card>
  )
}

export default FeedbackForm