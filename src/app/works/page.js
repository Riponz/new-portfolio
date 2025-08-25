"use client"


// clip-path: polygon(13% 6%, 87% 25%, 100% 100%, 0% 100%);
// upperpart change

// clip-path: polygon(0 0, 100% 0, 80% 94%, 19% 81%);
// lowerpart change


import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

async function Works() {


  useGSAP(() => {
    const projects = gsap.utils.toArray(".project")
    console.log(projects)
  })



  return (
    <>
    {/* “Each work is proof that imagination can become code.” */}

      <div className='w-[100vw] h-[100vh] relative'>

        <div className='preview w-[350px] h-[300px] absolute top-[35vh] left-[60vw]'></div>

        <div className='projects w-full h-full flex justify-start items-center ml-20'>
          <div className='table w-[50%] h-[70%]'>

            <div className='header flex justify-evenly items-center'>
              <div className='w-full h-max p-4 text-left'>Projects</div>
              <div className='w-full h-max p-4 text-left'>Year</div>
            </div>
            <div className='project border-t-1 flex justify-evenly items-center'>
              <div className='w-full h-max p-4 text-left'>Confessionity</div>
              <div className='w-full h-max p-4 text-left'>2023</div>
              <div className='relative w-100 h-100'><Image
                src="/images/hero-image.jpg"
                alt="Profile Picture"
                fill
                className="image object-cover"
              /></div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Works