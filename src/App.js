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
      <Form/>
      <FeedbackList feedbacks = {feedbacks}/>
    </>
  );
}

export default App;
