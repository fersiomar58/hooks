import React from 'react'
import { StarsRating } from './StarsRating'

const SearchBare = ({text,rating,handelChange,handelRatnig}) => {
  return (
    <div className='SearchBar'>
        <form className='opensearch'>
            <input type="text"  value={text}   onChange={e=>handelChange(e.target.value)}/>
            <StarsRating   rating={rating}  handelRatnig={handelRatnig}/>
        </form>
    </div>
  )
}

export default SearchBare 




