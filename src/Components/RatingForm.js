import React, { useState } from 'react'
import Rating from "react-rating"

export default function RatingForm() {
  const [rating1, setRating1] = useState(0);
  return (
    <div>
      <Rating
        className="rating"
        initialRating={rating1}
        onClick={rate => setRating1(rate)}
      />
      <p>Rating: {rating1}</p>
    </div>
  )
}
