"use client"

import React from 'react'
import { Boldonse } from "@next/font/google"
import ContactForm from '../components/ContactForm'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const boldonse = Boldonse({
    weight: ["400"]
})

function Talk() {

  return (
    <>
    <div className='w-[100%] min-h-[100vh] bg-violet-500 flex flex-col justify-start items-center relative overflow-hidden'>

        <div className={`text-[19vw] text-zinc-950 opacity-15 font-extrabold ${boldonse.className}`}>
            DIGANTA
        </div>

        <ContactForm />


    </div>
    </>
  )
}

export default Talk