"use client"

import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Great_Vibes, Silkscreen, Gideon_Roman, VT323 } from 'next/font/google'

const greatVibes = Great_Vibes({
    weight: ['400']
})

const roman = Gideon_Roman({
    weight: ['400']
})

const vt323 = VT323({
    weight: ['400']
})

function HeroSection() {

    useGSAP(() => {

    })

    return (
        <div className="main">
            <div className="background relative top-0 left-0 w-screen h-[100vh] grid grid-cols-20 grid-rows-1">
                <div className={`foreground ${roman.className} z-10 absolute uppercase pointer-events-none text-7xl w-screen h-screen flex flex-col justify-center items-center text-white mix-blend-difference`}>

                    <div className="line1 mt-50"><span className={`${greatVibes.className} text-7xl`}>D</span>iganta <span className={`${greatVibes.className} text-7xl`}>B</span>iswas</div>
                    <div className={`line1 ${vt323.className}`}>*Full Stack Developer*</div>
                    <div className="line1">Currently@EPAM</div>
                    <div className="line1">Based in India</div>
                    <div className="line1">Portfolio©2025</div>
                </div>

                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
                <div className="col bg-[#0a0a0a] grid grid-rows-12">
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                    <div className="box hover:bg-white"></div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection