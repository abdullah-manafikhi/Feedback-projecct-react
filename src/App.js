import FeedbackList from "./componants/FeedbackList";
import Header from "./componants/Header";
import Form from "./componants/Form";
import  {items}  from "./componants/items";
import { useState } from "react";


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
    setfeedbacks(feedbacks.filter((feedback) => {
      if(feedback.id !== id){
        return feedback
      }
      else{
        return 
      }
    }))
  }

  return (
    <>
      <Header />
      <Form feedbacks={feedbacks} addFeedback={ addFeedback }/>
      <FeedbackList deleteId ={(id) => {deleteFeedback(id)}} feedbacks = {feedbacks}/>
    </>
  );
}

export default App;
