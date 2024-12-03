import React, { useState } from 'react';
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  //  useEffect(() => {
  //   fetch('https://api.github.com/users/soham408')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   });
  // }, [])

  

  return (
    <>
    <div className='flex space-x-4 flex-center justify-center pt-[200px] pb-[100px]'>
    <div className='font-serif flex items-center justify-center text-[grey] p-4 rounded-xl grid flex-col'>
    <div className='text-black'> Name  : {data.name} </div>
    <div className='text-black'> Twitter Username  : {data.twitter_username} </div>
    <div className='text-black'> Github Followers : {data.followers} </div>
    <div className='text-black'> Github followings : {data.following} </div>
     </div>

     <div className='flex items-center justify-center grid  space-x-4'>
     <img className='rounded-xl w-[220px] m-6' src={data.avatar_url} alt="Git Image"  />
     </div>
     </div>
</>
  )
}

export default Github

export const githubInfoLoader = async () => {
 const response = await fetch('https://api.github.com/users/soham408') 
 return response.json()  
}