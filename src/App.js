import FeedbackList from "./componants/FeedbackList";
import {BrowserRouter as Router , Route , Routes , Link} from 'react-router-dom'
import Header from "./componants/Header";
import Form from "./componants/Form";
import  {items}  from "./componants/items";
import AboutPage from "./componants/pages/AboutPage";
import { useState } from "react";
import {FaQuestion} from "react-icons/fa";
import {FeedbackProvider} from './componants/contexts/FeedbackContext'


function App() {
  const [feedbacks, setfeedbacks] = useState(items)
  
  const addFeedback = (text , rating) => {
    setfeedbacks([{
      id:(feedbacks.length+1),
      text: text,
      rating : Number(rating)
    }, ...feedbacks])
  }

  const deleteFeedback= (id) => {
    console.log(feedbacks)
    const x = feedbacks.filter((feedback) => {
      if(feedback.id === id){
        return 
      }
      else{
        console.log(feedback.id)
        return feedback
      }
    })
    console.log(x)
    setfeedbacks(x)
    console.log(feedbacks)
  }

  return (
    <>
      <FeedbackProvider >   
        <Header />
          <Router >
            <Routes>
              <Route
              path='/'
              element={
                <>
                  <Form addFeedback={ addFeedback }/>
                  <FeedbackList deleteId ={(id) => {deleteFeedback(id)}}/>
                </>
              } />
            
            <Route 
              path='/About'
              element={
                <AboutPage />
              }
            />
            
          </Routes>
          <div className='about__icon'>
            <Link className='Link' to="/About">
              <FaQuestion />
            </Link>
          </div>
        </Router>
      </FeedbackProvider>
      </>
  );
}

export default App;
