import React from 'react'
import { useState } from "react"
import Rating from "@mui/material/Rating"
import { styled } from "@mui/material/styles"

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#37532B'
}});


const StarRating = () => {
    const [value, setValue] = useState(0);
  return (
    <div className="mx-8 mt-8">
        <h1 className="font-semibold">Rating</h1>
        <StyledRating 
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }
        }
        
        />
    </div>
  )
}

export default StarRating