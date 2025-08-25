"use client"

import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

function Skills() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".slider", {
      x:"-100%",

      scrollTrigger: {
        trigger: ".slider",
        start: "top 40%",
        scrub: 2,
        pin:true,
        pinSpacing:true
      }

    });
  })
  return (
    <>
      <div className='w-[100vw] h-max flex justify-start items-start flex-col'>
        <div className='quote w-full h-[100vh] flex justify-center items-center text-xl'>
          Your skills are the silent power behind every bold creation
        </div>

        <div className='slider p-5 flex gap-5 justify-start items-center'>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/1.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/1-1.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/2.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/3.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/4.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/5.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/6.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/7.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/8.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/9.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/10.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/11.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/12.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/13.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/14.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/15.webp"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
          <div className='relative w-50 h-50'>
            <Image
              src="/logos/16.png"
              fill
              className="object-contain" 
              alt="software log"/>
          </div>
        </div>

        <div className='quote w-full h-[100vh] flex justify-center items-center text-xl'>
          I believe in constantly upgrading my skills because growth never stops.
        </div>
      </div>
    </>
  )
}

export default Skills