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
                  <Form />
                  <FeedbackList />
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
