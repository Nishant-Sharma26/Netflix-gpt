import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies);
  return (
<div className="bg-black">
     <div className='-mt-56 relative z-20 pl-12'>
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {"Most Popular"} movies = {movies.PopularMovies}/>
      <MovieList title = {"Upcoming"} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {"Trending"} movies = {movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer;
