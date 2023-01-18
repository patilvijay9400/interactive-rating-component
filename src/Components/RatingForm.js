import React, { useState } from 'react'
import Rating from "react-rating"

export default function RatingForm(props) {
  
  return (
    <div>
      <Rating
        className="rating"
        initialRating={props.selectedRating}
        onClick={rate => props.setSelectedRating(rate)}
      />
    </div>
  )
}
