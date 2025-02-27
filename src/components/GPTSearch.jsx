import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constant';
const  GPTSearch = () =>{
  return (
    <>
    <div className=' -z-10 fixed'>
    <img
    className='h-screen object-cover md:w-screen'
      src={BG_URL}
      alt='background image'>
      </img>
  </div>
    <div className=''>
    
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GPTSearch;
