import FeedbackList from "./componants/FeedbackList";
import Header from "./componants/Header";
import Form from "./componants/Form";
import  {items}  from "./componants/items";
import { useState } from "react";


function App() {
  const [feedbacks, setfeedbacks] = useState(items)
  
console.log(items)
  return (
    <>
      <Header />
      <Form feedbacks={feedbacks} addFeedback={ (text , rating) => {
        console.log(feedbacks.length)
        setfeedbacks([{
          id:(feedbacks.length+1),
          text: text,
          rating : Number(rating)
        }, ...feedbacks])
      } }/>
      <FeedbackList feedbacks = {feedbacks}/>
    </>
  );
}

export default App;
