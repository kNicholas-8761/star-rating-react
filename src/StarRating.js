import React from 'react'
import * as bsIcons from "react-icons/bs";

const StarRating = () => {
    return (
        <div>
            {[...Array(5)].map( star =>{
                return(
                    <label>
                    <input type="radio" name="rating"></input>
                    <bsIcons.BsFillStarFill size="100"/>
                  </label>
                )
              
            })}
        </div>
    )
}

export default StarRating


            
