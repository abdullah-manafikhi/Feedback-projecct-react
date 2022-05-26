import React from 'react'
import {FaStar} from 'react-icons/fa'

function Rating() {

    const handleRatingHover = (e) =>{
        let currentStar = e.currentTarget.attributes[0].value
        console.log(currentStar) 
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
        <input type="radio" name="rating" id="star-1" value='1' />
        <label onClick={handleRatingHover} htmlFor="star-1"><FaStar/></label>
        <input type="radio" name="rating" id="star-2" value='2' />
        <label  onClick={handleRatingHover} htmlFor="star-2"><FaStar/></label>
        <input type="radio" name="rating" id="star-3"  value='3' />
        <label  onClick={handleRatingHover} htmlFor="star-3"><FaStar/></label>
        <input type="radio" name="rating" id="star-4" value='4' />
        <label  onClick={handleRatingHover} htmlFor="star-4"><FaStar/></label>
        <input type="radio" name="rating" id="star-5" value='5' />
        <label  onClick={handleRatingHover} htmlFor="star-5"><FaStar/></label>

    </div>
  )
}

export default Rating
