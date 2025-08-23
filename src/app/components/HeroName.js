"use client"

import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { usePathname } from 'next/navigation'

function HeroName() {
    const pathName = usePathname()

    useEffect(() => {
        gsap.killTweensOf(".name");

    gsap.set(".name", { clearProps: "all" });

      const split = new SplitType(".name", { types: "chars" }) 
    // change to "lines" or "chars" if you want line/letter animations

    // Reset first
    gsap.set(split.words, { opacity: 0, y: 20 })

    // Animate word by word
    gsap.to(split.words, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05, // controls delay between words
      ease: "power2.out"
    })

    return () => {
      split.revert() // cleanup when navigating away
    }
    }, [pathName])
    
    return (
        <div className='name text-[15vw]'>
            biswas
        </div>
    )
}

export default HeroName