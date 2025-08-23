// "use client"

import React from 'react'

function ContactForm() {
    return (
        <>
            <div className='w-full h-max flex flex-col justify-start items-center mb-6 overflow-hidden'>
                <form className='flex flex-col w-full justify-center items-center'>
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' placeholder='First Name'/>
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' placeholder='Last Name'/>
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' placeholder='Email'/>
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' placeholder='Message'/>
                    <button className='font-bold text-3xl p-4' type='submit'>SEND</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm