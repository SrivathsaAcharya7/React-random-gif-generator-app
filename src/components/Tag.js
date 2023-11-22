import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import Usegif from '../hooks/Usegif'



function Tag() {
    const[tag,setTag]=useState('')
    const{gif,loading,fetchData}=Usegif(tag);


    function clickHandler(){
        fetchData(tag);
    }
    function changeHandler(event){
        setTag(event.target.value)
    }
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> RANDOM GIF</h1>
        {
            loading?(<Spinner/>):(<img src={gif} alt="gifimg"  width="450"/>)
        }
        <input  value={tag} className='w-10/12 text-lg py-2 rounded-l mb-[3px] text-center' onChange={changeHandler} />
        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-l mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag