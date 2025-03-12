import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { DisplayHome } from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

export const Display = () => {
  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  
  //console.log(albumId);

  const bgcolor = albumsData[Number(albumId)]?.bgColor || '#121212'
  //console.log(bgcolor);
  useEffect(()=>{

    if(isAlbum) {
      displayRef.current.style.background = 'linear-gradient(${bgcolor},#121212)'

    }
    else{
            displayRef.current.style.background = '#121212'
    }
  }, [isAlbum, bgcolor])

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/albums/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display