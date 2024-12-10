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
     {/* <div className='flex space-x-4 flex-center justify-center pt-[200px] pb-[100px]'>
     <div className='font-serif flex items-center justify-center text-[white] p-4 rounded-xl grid flex-col'>
     <div className='text-white'> Name  : {data.name} </div>
     <div className='text-white'> Twitter Username  : {data.twitter_username} </div>
     <div className='text-white'> Github Followers : {data.followers} </div>
     <div className='text-white'> Github followings : {data.following} </div>
     </div>

      <div className='flex items-center justify-center grid  space-x-4'>
      <img className='rounded-xl w-[220px] m-6' src={data.avatar_url} alt="Git Image"  />
      </div>
      </div>  */}
      <div className='pt-[20%]'>
        <div className='flex items-center'>
      <figure className="md:flex bg-slate-500 rounded-xl p-8 md:p-0 dark:bg-slate-800 mx-auto w-1/1">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto " src={data.avatar_url} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium pr-[700px]">
      <div > Name  : {data.name} </div>
     <div > Twitter Username  : {data.twitter_username} </div>
     <div > Github Followers : {data.followers} </div>
     <div > Github followings : {data.following} </div>
      </p>
    </blockquote>
    <figcaption className="font-medium">
     
    </figcaption>
  </div>
</figure> 
</div>
</div>
 </>
  )
 }

export default Github;

export const githubInfoLoader = async () => {
 const response = await fetch('https://api.github.com/users/soham408') 
 return response.json()  
}

