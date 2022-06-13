import  {createContext , useState} from 'react'
import { DefaultContext } from 'react-icons/lib'
import { items } from '../items'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
        const [feedbacks, setfeedbacks] = useState(items)  
        const [feedbackEdit, setfeedbackEdit] = useState({
            item:{},
            edit:false
        })

        let feedbackUpdate = (updId , updText , updRating) => {
          const updatedFeed = feedbacks.map((feedback) => {
                if(feedback.id == updId){
                    return {
                        id: updId,
                        text: updText,
                        rating: updRating
                    }
                }
                else return feedback
            })
            console.log(updatedFeed)
            setfeedbacks(updatedFeed)
        }

        const deleteFeedback= (id) => { 
        const x = feedbacks.filter((item) => (item.id !== id))
        setfeedbacks(x)
        }

        const addFeedback = (text , rating) => {
        setfeedbacks([{
            id:(feedbacks.length+1),
            text: text,
            rating : Number(rating)
         }, ...feedbacks])
        }

        const editFeedback = (item) => {
            setfeedbackEdit({
                item:item,
                edit:true
            })
        }

    return <FeedbackContext.Provider value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackUpdate,
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 