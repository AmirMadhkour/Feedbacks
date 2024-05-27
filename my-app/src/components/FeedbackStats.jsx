import {useContext} from'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {

    const{ feedback } = useContext(FeedbackContext) 

//claculate ratings avg  //feedback.reduce((acc, cur) => {...}, 0) - Cette partie initialise la méthode reduce sur le tableau feedback. La méthode reduce itère sur chaque élément du tableau et accumule une seule valeur (dans ce cas, la somme totale des évaluations). Le deuxième argument 0 est la valeur initiale de l'accumulateur (acc), qui commence à 0.
let average =
    feedback.reduce((acc,cur) => {
        return acc + cur.rating 
    }, 0 ) / feedback.length // 0 howa val initial de acc 

average = average.toFixed(1).replace(/[.,]0$/, '')

return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average } </h4>
    </div>
  )
}



export default FeedbackStats