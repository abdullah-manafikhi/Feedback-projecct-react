import  {createContext , useState ,useEffect} from 'react'
import { DefaultContext } from 'react-icons/lib'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
        const [feedbacks, setfeedbacks] = useState([])  
        const [feedbackEdit, setfeedbackEdit] = useState({
            item:{},
            edit:false
        })
        useEffect(() => {
            fetchFeedback()
        } , [])

        const fetchFeedback = async () => {
            const response = await fetch("http://localhost:5000/feedbacks")
            const data = await response.json()
            setfeedbacks(data)
        }

        let feedbackUpdate = async (updId , updText , updRating) => {
            const response = await fetch(`http://localhost:5000/feedbacks/${updId}` , {
                method : 'PUT',
                headers: {
                    'Content-Type' : 'application/json',               
                 },
                 body: JSON.stringify({id: updId, text: updText ,rating: updRating})
            })
            const data = await response.json()

            const updatedFeed = feedbacks.map((feedback) => {
                if(feedback.id === updId){
                    return data
                }
                else return feedback
            })
            setfeedbacks(updatedFeed)
        }

        const deleteFeedback= async (id) => { 
        if(window.confirm("Are you sure you want to delete this feedback"))  {
            await fetch(`http://localhost:5000/feedbacks/${id}` , {method : "DELETE"})
            setfeedbacks( feedbacks.filter((item) => (item.id !== id)))
        }
        }

        const addFeedback = async (text , rating) => {
            const response = await fetch("http://localhost:5000/feedbacks" ,{
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({text: text , rating: +rating}),
            }
            )
            const data = await response.json()
            console.log(data)
            setfeedbacks([data, ...feedbacks])
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