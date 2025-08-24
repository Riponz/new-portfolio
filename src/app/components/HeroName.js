"use client"

import React from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

function HeroName() {

    const timeline = gsap.timeline()

    useGSAP(() => {
        const split = new SplitType(".name")

        timeline.from(split.chars, {
            opacity: 0,
            y: 20,
            duration: 0.7,
            delay: 0.3,
            stagger: 0.1
        })

        timeline.from(".tag",{
            y:20,
            opacity:0,
            duration:0.8
        })

        timeline.from(".hire",{
            y:20,
            opacity:0,
            duration:0.8
        })
    })

    return (
        <>
            <div className='name text-[15vw]'>
                biswas
            </div>
            <p className='tag'>your friendly neighborhood web developer</p>
            <div className='hire border-1 mt-8 p-2 rounded-xl backdrop-blur-2xl bg-transparent cursor-pointer border-violet-600'>Hire Me</div>

        </>
    )
}

export default HeroName