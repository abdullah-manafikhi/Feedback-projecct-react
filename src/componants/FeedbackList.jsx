import FeedbackItem from "./FeedbackItem"
import {motion ,AnimatePresence} from 'framer-motion'

function FeedbackList({feedbacks , deleteId}) {


  return (
    <div>  
        {feedbacks.map(feedback=> (
          <div>
            <FeedbackItem key={feedback.id}  deleteId={(id) => {deleteId(id)}} id ={feedback.id} text={feedback.text} rating={feedback.rating} />
          </div>
          )
        )
        }
    </div>
  )
}

export default FeedbackList
