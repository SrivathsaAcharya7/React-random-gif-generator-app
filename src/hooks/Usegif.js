import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const API_Key=process.env.REACT_APP_GIPHY_API_KEY
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
function Usegif(tag) {
    const[gif,setGif]=useState('')
    const[loading,setLoading]=useState('false')

   

    async function fetchData(tag){
        setLoading(true)

        const {data}= await axios.get(tag?`${url}&tag=${tag}`:url)
        const imageSrc=data.data.images.downsized_large.url;
        setGif(imageSrc)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData();
    },[])
  
  
  
    return {gif,loading,fetchData}
}

export default Usegif