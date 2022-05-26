import Card from "./Card"
import { items } from "./items"

function FeedbackItem({text , rating}) {
  return(
      <>
        <Card>
            <div className='feedbackItem__row1'>
                <div className='card__rating'>{rating}</div>
                <div></div>
            </div>
            <div  className='feedbackItem__row2'>
                <p className="card__text">{text}</p>
            </div>
        </Card>
      </>
  )
 
}

export default FeedbackItem
