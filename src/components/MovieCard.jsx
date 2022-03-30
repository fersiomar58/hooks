import React from 'react'
import { StarsRating } from './StarsRating'

export const MovieCard = ({item,deleteMovie}) => {
  return (
    <div className='Movie-card'>
        <h3 style={{fontSize:"25px"}}>{item.name}</h3>
        <div className="imm">

        <img src={item.image} alt={item.name}  />
        </div>
       <StarsRating rating={item.rating}/>
        <p style={{color:"grey",fontSize:"20px"}}>{item.date}</p>
        <button className='btn'  onClick={()=>deleteMovie(item.id)}>Delete</button>
    </div>
  )
}
