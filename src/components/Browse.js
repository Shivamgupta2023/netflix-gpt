import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../Hooks/useGetNowPlayingMovies'
import MainContainer from './MainContainer'

const Browse = () => {

  useGetNowPlayingMovies()

  return (
    <div className='flex flex-col'>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse