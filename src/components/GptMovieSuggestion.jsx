import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const {movieResults,moviesNames} = useSelector(store=>store.gpt);
    if(!moviesNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90 w-screen'>
      <diV>
        {moviesNames.map((movieName,index)=>(
            <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        ))}
      </diV>
    </div>
  )
}

export default GptMovieSuggestion
