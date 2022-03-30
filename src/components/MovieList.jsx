import React from 'react'
import { MovieCard } from './MovieCard'

const MovieList = ({data,deleteMovie}) => {
  return (
    <div className='Movie-List'>
        {
            React.Children.toArray(data.map(movie=><MovieCard  item={movie} deleteMovie={deleteMovie} />))
        }
    </div>
  )
}

export default MovieList