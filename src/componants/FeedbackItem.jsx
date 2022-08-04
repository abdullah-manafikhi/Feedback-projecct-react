import Card from "./Card"
import {FaTrash , FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from "./contexts/FeedbackContext"

function FeedbackItem({id , text , rating}) {

  let {deleteFeedback , editFeedback ,feedbacks} = useContext(FeedbackContext)

  

  return(
      <div style = {{ padding:'0rem 2rem' }}>
        <Card>
            <div className='feedbackItem__row1'>
                <div className='card__rating'>{rating}</div>
                <div onClick={() => {deleteFeedback(id)} }className='card__trash__edit'><FaTrash /></div>
                <div onClick={() => {editFeedback(feedbacks[id-1])}} className='card__trash__edit'><FaEdit /></div>
            </div>
            <div  className='feedbackItem__row2'>
                <p className="card__text">{text}</p>
            </div>
        </Card>
      </div>
  )
 
}

export default FeedbackItem
