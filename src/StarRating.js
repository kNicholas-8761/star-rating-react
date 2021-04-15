import React, {useState} from 'react'
import * as bsIcons from "react-icons/bs";
import './App.css'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    return (
        <div>
            {[...Array(5)].map((star,index) =>{
                const ratingValue = index + 1;
                return(
                    <label>
                    <input type="radio" name="rating"></input>
                    <bsIcons.BsFillStarFill className="star" size="100" value={ratingValue}/>
                  </label>
                )
              
            })}
        </div>
    )
}


export default StarRating


            
