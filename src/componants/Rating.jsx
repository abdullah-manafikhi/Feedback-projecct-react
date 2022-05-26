import React from 'react'
import {FaStar} from 'react-icons/fa'

function Rating({rating}) {

    const handleRatingHover = (e) =>{
        let currentStar = e.currentTarget.attributes[0].value
        rating(currentStar) 
        let ratings = e.currentTarget.parentNode.children

        for( let item of ratings){
            if(item.attributes[0].value === currentStar){
                item.style.color = 'gold'
                break
            }
          item.style.color = 'gold'
      }
    } 

  return (
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
  )
}

export default Rating
