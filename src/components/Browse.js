import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../Hooks/useGetNowPlayingMovies'
import MainContainer from './MainContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {


  useGetNowPlayingMovies()

  const showGPTSearchPage = useSelector(store => store.gpt?.gptToggleBtn)

  return (
    <div className='flex flex-col'>
      <Header/>
      {showGPTSearchPage ? <GptSearch/> : <MainContainer/>}
    </div>
  )
}

export default Browse