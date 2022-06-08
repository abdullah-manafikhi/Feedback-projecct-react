import  {createContext , useState} from 'react'
import { DefaultContext } from 'react-icons/lib'
import { items } from '../items'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
        const [feedback, setfeedback] = useState(items)

    return <FeedbackContext.Provider value={{
        feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 