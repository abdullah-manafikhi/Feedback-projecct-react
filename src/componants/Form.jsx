import Card from "./Card"
import Button from "./Button"
import Rating from "./Rating";
import {useState} from "react"

function Form({addFeedback , feedbacks}) {

    const [message, setmessage] = useState("")
    const [text, settext] = useState(" ")
    const [rating, setrating] = useState(6)
    const [btnDisabled, setbtnDisabled] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()

        addFeedback(text , rating)
    }

    let rateAvr = feedbacks.reduce((avr , feedback) => {
        console.log(typeof avr)
       return avr +feedback.rating
    }, 0)

     rateAvr = rateAvr/feedbacks.length
     rateAvr = rateAvr.toFixed(1)
    console.log(typeof rateAvr)
   

    const handleChange = (e) => {
        var value = e.currentTarget.value.trim()
       if( value.length <  10){
           setmessage("You have to choose rating and to enter at least 10 charecters")
           setbtnDisabled(true)
       }
       else if(value.length >= 10 && rating !== "6"){
           setmessage(" ")
           settext(value)
           setbtnDisabled(false)
        }
    }

  return (
    <>
        <Card>
        <h2>Please! rate our website to consider your opinion while improving it</h2>
        <Rating rating={(rate) => {setrating(rate)}} />
        <input onChange={handleChange} className='form__input' type="text" name="" id="formInput" placeholder="Your Feedback goes here " />
        <Button click={handleClick} className='form__btn' btnDisabled = {btnDisabled}>SEND</Button>
        <p className="form__msg">{message}</p>
        </Card>
        <div className="rating__stats">
            <span>{feedbacks.length} reviews</span>
            <span>{rateAvr}</span>
            {console.log(typeof rateAvr)}
        </div>
    </>
  )
}

export default Form
