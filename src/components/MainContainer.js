import React from 'react'
import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';
import VideoTitle from './VideoTitle';
import SecondaryContainer from './SecondaryContainer';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies?.length) return;
    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie

  return (
    <div className='pt-25'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoContainer movieid={id}/>
        <SecondaryContainer/>
    </div>
  )
}

export default MainContainer