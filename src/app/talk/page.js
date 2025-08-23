import React from 'react'
import { Boldonse } from "@next/font/google"
import ContactForm from '../components/ContactForm'

const boldonse = Boldonse({
    weight: ["400"]
})

function Talk() {
  return (
    <>
    <div className='w-[100vw] h-max bg-violet-500 flex flex-col justify-start items-center relative overflow-hidden'>

        <div className={`text-[18vw] text-zinc-950 opacity-15 font-extrabold ${boldonse.className}`}>
            DIGANTA
        </div>

        <ContactForm />

    {/* <footer className='w-[90%] h-max p-2 text-sm text-center border-t-2 border-zinc-900 border-opacity-5'>
        Diganta Biswas, 2025
    </footer> */}
    </div>
    </>
  )
}

export default Talk