import React from 'react'

const MovieCard = ({path}) => {
    
  return (
    <div className='w-48 mx-4 mt-2'>
        <img
        src={`https://image.tmdb.org/t/p/w500${path}`}
        alt='cardImg'
        />
    </div>
  )
}

export default MovieCard