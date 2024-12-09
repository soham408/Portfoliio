import React, { useState } from 'react';
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"







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
      </div> */}


<Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>


 </>
  )
 }

export default Github;

export const githubInfoLoader = async () => {
 const response = await fetch('https://api.github.com/users/soham408') 
 return response.json()  
}

