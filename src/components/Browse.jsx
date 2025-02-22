import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'; // ✅ Correct
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
    </div>
  )
}

export default Browse
