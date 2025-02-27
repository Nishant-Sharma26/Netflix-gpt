import React from 'react'

const VideoTitle = ({title,overview})=>{
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='mx-2 text-2xl md:text-6xl md:mx-0 font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-2 md:my-0'>
        <button className=' mx-2 bg-white text-black   text-lg py-1 px-3    rounded-lg hover:bg-opacity-70 md:text-xl md:py-4 md:px-12'>
         Play</button>
        <button className = 'hidden md:inline-block mx-2 bg-white text-black   text-lg p-4 px-12  text-xl  rounded-lg hover:bg-opacity-70'>More Info</button>
      </div>
    </div>
  )
}
export default VideoTitle;