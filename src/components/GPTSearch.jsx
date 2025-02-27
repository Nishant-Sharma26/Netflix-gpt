import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constant';
const  GPTSearch = () =>{
  return (
    <div>
         <div className=' -z-10 fixed'>
      <img
        src={BG_URL}
        alt='background image'>
        </img>
    </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch;
