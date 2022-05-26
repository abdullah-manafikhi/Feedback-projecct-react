import FeedbackItem from "./FeedbackItem"
import { feedbacks } from "./items"
import Card from "./Card"

function FeedbackList({feedbacks , deleteId}) {


  return (
    <div>   
        {feedbacks.map(feedback=> (
           <FeedbackItem key={feedback.id}  deleteId={(id) => {deleteId(id)}} id ={feedback.id} text={feedback.text} rating={feedback.rating} />
          )
        )
        }
    </div>
  )
}

export default FeedbackList
