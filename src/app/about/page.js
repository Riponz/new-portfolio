"use client"

import React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

function About() {

  
  useGSAP(() => {
    gsap.from(".image", {
      y: 20,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out"
      
    })
    const split = new SplitType(".texts")

    gsap.from(split.lines, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay:0.5,
      stagger: 0.1, // controls delay between words
      ease: "power2.out"
    })
  })


  return (
    <>
      <div className='w-[100vw] h-max'>
        <div className='hero w-full h-[100vh] flex justify-center items-center backdrop-blur-2xl'>
          {/* left */}
          <div className='w-full h-[100vh] px-4 text-2xl flex flex-col gap-5 justify-center items-center'>
            <p className='texts'>YOUR FRIENDLY NEIGHBOURHOOD SOFTWARE DEVELOPER WITH EXPERTISE BUILDING CUSTOM WEBSITES USING REACT.JS AND NEXT.JS. WELL-VERSED IN MANAGING DATABASES WITH SKILLS SPANNING MYSQL AND MONGODB, ALONG WITH BACKEND DEVELOPMENT USING SPRING BOOT, NODE.JS AND FASTAPI.</p>

            <p className='texts'>ENTHUSIASTIC WEB WIZARD AND CODING CONJURER WITH COLLABORATION SUPERPOWERS! EQUIPPED WITH THE ABILITY TO TURN COFFEE INTO CODE AND BRAINSTORMING SESSIONS INTO DIGITAL MAGIC. LET'S TEAM UP AND TURN YOUR DREAMS INTO DIGITAL AWESOMENESS - NO WANDS REQUIRED!</p>
          </div>



          {/* right */}
          <div className='w-full h-[100vh] flex justify-center items-center'>

            <div className='relative w-[80%] h-[80%] overflow-hidden flex justify-center items-center'>
              <Image
                src="/images/hero-image.jpg"
                alt="Profile Picture"
                fill
                className="image object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About