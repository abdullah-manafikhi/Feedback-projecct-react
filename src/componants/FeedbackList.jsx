import FeedbackItem from "./FeedbackItem"
import {useContext} from 'react'
import FeedbackContext from "./contexts/FeedbackContext"

function FeedbackList({ deleteId}) {

  let feedbacks = useContext(FeedbackContext)
  feedbacks = feedbacks.feedback

  return (
    <div>  
        {feedbacks.map(item=> (
          <div key={item.id}>
            <FeedbackItem key={item.id}  deleteId={(id) => {deleteId(id)}} id ={item.id} text={item.text} rating={item.rating} />
          </div>
          )
        )
        }
    </div>
  )
}

export default FeedbackList
