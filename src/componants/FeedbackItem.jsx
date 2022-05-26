import Card from "./Card"
import { items } from "./items"
import {FaTrash} from 'react-icons/fa'

function FeedbackItem({id , text , rating , deleteId}) {

  const handleDelete = () => {
    deleteId(id)
  }

  return(
      <>
        <Card>
            <div className='feedbackItem__row1'>
                <div className='card__rating'>{rating}</div>
                <div onClick={handleDelete} className='card__trash'><FaTrash /></div>
            </div>
            <div  className='feedbackItem__row2'>
                <p className="card__text">{text}</p>
            </div>
        </Card>
      </>
  )
 
}

export default FeedbackItem
