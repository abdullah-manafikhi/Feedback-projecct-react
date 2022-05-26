import FeedbackItem from "./FeedbackItem"
import { feedbacks } from "./items"
import Card from "./Card"

function FeedbackList({feedbacks}) {
  console.log( feedbacks.length)
  return (
    <div>   
        {feedbacks.map(feedback=> (
           <FeedbackItem key={feedback.id} text={feedback.text} rating={feedback.rating} />
          )
        )
        }
    </div>
  )
}

export default FeedbackList
