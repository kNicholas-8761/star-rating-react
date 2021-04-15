import React from 'react'
import * as bsIcons from "react-icons/bs";

const StarRating = () => {
    return (
        <div>
            {[...Array(5)].map( star =>{
                return <bsIcons.BsFillStarFill size="100"/>
            })}
        </div>
    )
}

export default StarRating

            
