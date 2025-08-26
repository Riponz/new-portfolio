"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

function Works() {
  const confessionityRef = useRef()
  const confessionityFollowerRef = useRef()

  useGSAP(() => {
    const follower = confessionityFollowerRef.current;
    const container = confessionityRef.current;

    const moveFollower = (e) => {
      console.log(e)
      const rect = container.getBoundingClientRect();
      const x = e.clientX
      const y = e.clientY

      console.log("x", x)
      console.log("y", y)


      gsap.to(follower, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power3.out"
      })
    }

    const showFollower = () => gsap.to(follower, { scale: 1, autoAlpha: 1, duration: 0.3 });
    const hideFollower = () => gsap.to(follower, { scale: 0, autoAlpha: 0, duration: 0.3 });

    container.addEventListener("mousemove", moveFollower);
    container.addEventListener("mouseenter", showFollower);
    container.addEventListener("mouseleave", hideFollower);

    return () => {
      container.removeEventListener("mousemove", moveFollower);
      container.removeEventListener("mouseenter", showFollower);
      container.removeEventListener("mouseleave", hideFollower);
    };
  })

  return (
    <>
      <div className='quote w-full h-[100vh] flex flex-col justify-center items-center text-xl'>
        Each work is proof that imagination can become code.
        <ArrowDown />
      </div>


      <div ref={confessionityRef} className='quote w-full h-[100vh] flex flex-col gap-5 justify-center items-center bg-[#b2a4ff] overflow-hidden'>
        <div ref={confessionityFollowerRef} className='fixed w-100 h-60 opacity-0 top-0 left-0'>
          <Image
            src="/screenshots/confessionity.png"
            alt="confessionity screenshot"
            fill
            className='object-contain' />
        </div>
        <div className='title text-white text-7xl'>confessionity</div>
        <div className='desc'>anonymous social media app</div>
        <a href='https://confessionity.vercel.app' target='_blank' className='visit flex justify-center items-center p-2 cursor-pointer'>visit<ArrowUpRight size={20} />
        </a>
      </div>


      <div className='quote w-full h-[100vh] flex flex-col gap-5 justify-center items-center bg-[#5c724a]'>
        <div className='title text-[#f5f5d5] text-7xl'>argos</div>
        <div className='desc'>no nonsense finance organizer</div>
        <div className='status text-sm'>in progress</div>
        {/* <div className='visit'></div> */}
      </div>
    </>
  )
}

export default Works