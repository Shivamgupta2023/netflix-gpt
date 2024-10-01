import React from 'react'
import useGetMovieTrailer from '../Hooks/useGetMovieTrailer'
import { useSelector } from 'react-redux'

const VideoContainer = ({movieid}) => {

    const trailorVideo = useSelector(store => store.movies?.movieVideos)

    useGetMovieTrailer(movieid)

    if(!trailorVideo) return

  return (
    <div className=''>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailorVideo[0]?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoContainer