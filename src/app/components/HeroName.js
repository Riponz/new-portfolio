"use client"

import React from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
// import Spline from '@splinetool/react-spline/next';

function HeroName() {

    const handleClick = () => {
        const email = "biswadiganta2001@gmail.com"; // put your email here
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        window.open(url, "_blank");
    };

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

        timeline.from(".tag", {
            y: 20,
            opacity: 0,
            duration: 0.8
        })

        timeline.from(".hire", {
            y: 20,
            opacity: 0,
            duration: 0.8
        })
    })

    return (
        <>
            <div className=' flex justify-center items-center w-[100vw] text-[20vw] text-violet-300'>
                <p className='name'>diganta</p>
            </div>
            <p className='w-full tag text-[4vw] md:text-[2vw] wrap-anywhere text-center'>your friendly neighborhood web developer</p>
            <div onClick={handleClick} className='hire border-1 mt-8 p-2 rounded-xl backdrop-blur-2xl bg-transparent cursor-pointer border-violet-600'>Hire Me</div>

        </>
    )
}

export default HeroName