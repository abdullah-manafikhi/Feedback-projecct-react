import Card from "./Card"
import Button from "./Button"
import {useState , useContext ,useEffect} from "react"
import FeedbackContext from "./contexts/FeedbackContext"
import {FaStar} from 'react-icons/fa'


function Form() {

    let {feedbacks , feedbackEdit ,addFeedback , feedbackUpdate} = useContext(FeedbackContext)

    const [message, setmessage] = useState("")
    const [text, settext] = useState("")
    const [rating, setrating] = useState(6)
    const [btnDisabled, setbtnDisabled] = useState(true)

    useEffect(() => {
        if(feedbackEdit.edit){
          settext(feedbackEdit.item.text)
          setrating(feedbackEdit.item.rating)
      }
    }, [feedbackEdit])

    const handleClick = (e) => {
        e.preventDefault()
        if(feedbackEdit.edit === true){
            feedbackEdit.edit = false
            console.log(feedbackEdit.item.id)
            feedbackUpdate(feedbackEdit.item.id , text , rating)
        }
        else {addFeedback(text , rating)}
    }

    useEffect(() => {
        if(rating !== 6){
        let currentStar = rating
        let stars = document.querySelectorAll("label")
        // remake the stars grey if you changed the rating
        for( let item of stars){item.style.color = 'grey' }
        for( let item of stars){
            if(item.attributes[0].value == currentStar){
                item.style.color = 'gold'
                break
            }
          item.style.color = 'gold'
      }

      if( text.trim().length <  10){
        setmessage("You have to choose rating and to enter at least 10 charecters")
        setbtnDisabled(true)
        }
        else if(text.trim().length >= 10){
        setmessage("")
        setbtnDisabled(false)
        }}
    } , [rating])

    const handleRatingHover = (e) =>{
      setrating(e.currentTarget.attributes[0].value)
    } 

    let rateAvr = feedbacks.reduce((avr , item) => {
         return avr+(+item.rating)
    },0)

     rateAvr = rateAvr/feedbacks.length
     rateAvr = rateAvr.toFixed(1)
   

    const handleChange = (e) => {
        var value = e.currentTarget.value
        settext(value)
       if( value.trim().length <  10 || rating === 6){
           setmessage("You have to choose rating and to enter at least 10 charecters")
           setbtnDisabled(true)
       }
       else if(value.trim().length >= 10 && rating !== "6"){
           setmessage(" ")
           setbtnDisabled(false)
        }
    }

  return (
    <div style={{padding:'0rem .5rem'}}>
        <Card>
        <h2>Please! rate our website to consider your opinion while improving it</h2>
        <div className='rating__div'>
            <input type="radio" name="rating" id="1" value='1' />
            <label onClick={handleRatingHover} htmlFor="1"><FaStar/></label>
            <input type="radio" name="rating" id="2" value='2' />
            <label  onClick={handleRatingHover} htmlFor="2"><FaStar/></label>
            <input type="radio" name="rating" id="3"  value='3' />
            <label  onClick={handleRatingHover} htmlFor="3"><FaStar/></label>
            <input type="radio" name="rating" id="4" value='4' />
            <label  onClick={handleRatingHover} htmlFor="4"><FaStar/></label>
            <input type="radio" name="rating" id="5" value='5' />
            <label  onClick={handleRatingHover} htmlFor="5"><FaStar/></label>
        </div>
        <input onChange={handleChange} className='form__input' type="text" value={text} id="formInput" placeholder="Your Feedback goes here " />
        <Button click={handleClick} className='form__btn' btnDisabled = {btnDisabled}>SEND</Button>
        <p className="form__msg">{message}</p>
        </Card>
        <div className="rating__stats">
            <span>{feedbacks.length} reviews</span>
            <span>{rateAvr}</span>
        </div>
    </div>
  )
}

export default Form
