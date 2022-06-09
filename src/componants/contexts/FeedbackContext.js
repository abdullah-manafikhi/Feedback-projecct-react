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
            console.log(item)
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
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 