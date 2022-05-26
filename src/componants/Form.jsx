import Card from "./Card"
import Button from "./Button"
import Rating from "./Rating";
import {useState} from "react"

function Form() {

    const [message, setmessage] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        var value = e.currentTarget.value.trim()
       if( value.length <  10){
           setmessage("You have to enter at least 10 charecters")
       }
       else if(value.length >= 10){
           setmessage(" ")
        }
    }

  return (
    <Card>
      <h2>Please! rate our website to consider your opinion while improving it</h2>
      <Rating />
      <input onChange={handleChange} className='form__input' type="text" name="" id="" placeholder="Your Feedback goes here " />
      <Button click={handleClick} className='form__btn'>SEND</Button>
      <p className="form__msg">{message}</p>
    </Card>
  )
}

export default Form
